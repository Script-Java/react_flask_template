from app import db
from flask_login import UserMixin
from sqlalchemy.dialects.postgresql import JSON

class Test1(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(55), nullable=False)
    password = db.Column(db.String(255), nullable=False)
    portfolio_id = db.Column(db.Integer, db.ForeignKey('portfolio.id'))
    portfolio = db.relationship('Portfolio', backref='user', lazy=True)

class Test2(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fullname = db.Column(db.String(255), nullable=False)
    summary = db.Column(db.Text, nullable=False)
    workhistory = db.Column(db.JSON, nullable=False)
    project = db.Column(db.JSON, nullable=False)
    
