from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
import datetime
import os
from dotenv import find_dotenv, load_dotenv

dotenv_path = find_dotenv()

if dotenv_path:
    load_dotenv(dotenv_path)
    
# Configurations
SECRET_KEY = os.getenv('app_secret_key')  # Replace with your actual secret key

# Blueprint setup
auth_bp = Blueprint('auth', __name__)


@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if username in users:
        return jsonify({'message': 'User already exists'}), 409

    hashed_password = generate_password_hash(password, method='sha256')
    users[username] = hashed_password

    return jsonify({'message': 'User registered successfully'}), 201

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if username not in users or not check_password_hash(users[username], password):
        return jsonify({'message': 'Invalid credentials'}), 401

    token = jwt.encode({
        'username': username,
        'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1)
    }, SECRET_KEY)

    return jsonify({'token': token}), 200

@auth_bp.route('/protected', methods=['GET'])
def protected():
    token = request.headers.get('x-access-token')

    if not token:
        return jsonify({'message': 'Token is missing'}), 401

    try:
        data = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        current_user = data['username']
    except:
        return jsonify({'message': 'Token is invalid or expired'}), 401

    return jsonify({'message': f'Hello, {current_user}! This is a protected route.'}), 200
