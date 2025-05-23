from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from werkzeug.security import generate_password_hash, check_password_hash
from email_validator import validate_email, EmailNotValidError
import re
import random
from datetime import datetime

from models import db, User, UserLoginLogs

auth = Blueprint('auth', __name__)

def is_valid_phone(phone):
    return re.fullmatch(r"^[6-9]\d{9}$", phone)

def is_strong_password(pw):
    return re.fullmatch(r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$', pw)

@auth.route('/register', methods=['POST'])
def register():
    data = request.json

    required_fields = ['fullname', 'email', 'phone', 'password']
    # if not all(field in data and data[field] for field in required_fields):
    #     return jsonify({'error': 'All fields except business_name are required'}), 400

    try:
        email_obj = validate_email(data['email'])
        email = email_obj.email
        email_local = email_obj.local_part
    except EmailNotValidError:
        return jsonify({'error': 'Invalid email address'}), 400

    if not is_valid_phone(data.get('phone', '')):
        return jsonify({'error': 'Invalid phone number'}), 400

    if not is_strong_password(data.get('password', '')):
        return jsonify({'error': 'Password must be 8+ chars with upper/lower/digit/symbol'}), 400

    if User.query.filter_by(email=email).first():
        return jsonify({'error': 'Email already exists'}), 409

    # Generate unique userid
    for _ in range(5):
        rand_num = random.randint(1111, 9999)
        userid = f"{rand_num}{email_local}"
        if not User.query.filter_by(userid=userid).first():
            break
    else:
        return jsonify({'error': 'Could not generate unique userid'}), 500

    hashed_pw = generate_password_hash(data['password'])

    new_user = User(
        fullname=data['name'],
        userid=userid,
        email=email,
        phoneno=data['phone'],
        password=hashed_pw,
        businessname=data.get('business_name')  # Optional
    )

    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'User registered', 'userid': userid}), 201


# @auth.route('/login', methods=['POST'])
# def login():
#     data = request.json
#     user = User.query.filter_by(email=data.get('email')).first()
#     if user and check_password_hash(user.password, data['password']):
#         access_token = create_access_token(identity=user.userid)  # Token contains userid
#         return jsonify({'token': access_token}), 200
#     return jsonify({'error': 'Invalid credentials'}), 401

@auth.route('/login', methods=['POST'])
def login():
    data = request.json
    user = User.query.filter_by(email=data.get('email')).first()
    
    if user and check_password_hash(user.password, data['password']):
        access_token = create_access_token(identity=user.userid)

        # --- Log login attempt ---
        login_log = UserLoginLogs(
            userid=user.userid,
            email=user.email,
            timestamp=datetime.utcnow(),
            date=datetime.utcnow().date()
        )
        db.session.add(login_log)
        db.session.commit()
        # -------------------------

        return jsonify({'token': access_token}), 200
    
    return jsonify({'error': 'Invalid credentials'}), 401
