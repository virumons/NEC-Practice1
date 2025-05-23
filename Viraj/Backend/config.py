import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    SECRET_KEY = os.getenv('SECRET_KEY')
    JWT_SECRET_KEY = os.getenv('JWT_SECRET_KEY')
    SQLALCHEMY_DATABASE_URI = os.getenv('SQLALCHEMY_DATABASE_URI')  # PostgreSQL only
    # SQLALCHEMY_DATABASE_URI = (
    #     "postgresql://postgres:5*0ognxz0q>IB.nNyAYtHCiXcx6@localhost:5432/postgres"
    #     .replace('*', '%2A')
    #     .replace('>', '%3E')
    # )
    SQLALCHEMY_TRACK_MODIFICATIONS = False


