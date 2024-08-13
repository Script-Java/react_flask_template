from flask import Flask, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from dotenv import find_dotenv, load_dotenv
from auth import auth_bp
from flask_cors import CORS

dotenv_path = find_dotenv()

if dotenv_path:
    load_dotenv(dotenv_path)
    
import os

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATION'] = False
app.config['SECRET_KEY'] = os.environ.get('app_secret_key')
db = SQLAlchemy(app)

app.register_blueprint(auth_bp)
 
@app.route('/')
def index():
    return jsonify({
        'Message': 'Hello World'
    })

# uncomment to reinitiate the database
#if __name__ == '__main__':
#    with app.app_context():
#        db.create_all()
        
    app.run(debug=True)