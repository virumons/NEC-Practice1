from datetime import datetime
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'userdata'
    __table_args__ = {'schema': 'Buy-Sell-eCom-Dev'}

    userid = db.Column(db.String(50), primary_key=True)
    fullname = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(250), unique=True, nullable=False)
    phoneno = db.Column(db.String(10), nullable=False)
    password = db.Column(db.String(200), nullable=False)
    businessname = db.Column(db.String(100), nullable=True)

class UserLoginLogs(db.Model):
    __tablename__ = 'usersLoginLogs'
    __table_args__ = {'schema': 'Buy-Sell-eCom-Dev'}

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    userid = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)
    date = db.Column(db.Date, default=datetime.utcnow().date)
