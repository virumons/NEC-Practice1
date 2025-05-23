
# from flask_sqlalchemy import SQLAlchemy



from flask import Flask
from flask_jwt_extended import JWTManager
from models import db
from flask_cors import CORS
from auth import auth
from config import Config

app = Flask(__name__)
# CORS(app)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})
app.config.from_object(Config)
# db = SQLAlchemy()

db.init_app(app)
JWTManager(app)

app.register_blueprint(auth, url_prefix="/api")

with app.app_context():
    db.create_all()  # creates 'userdata' table in PostgreSQL DB 'nec'

if __name__ == '__main__':
    app.run(debug=True)
