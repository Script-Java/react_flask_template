#!/bin/bash

# Set up the backend (Flask)
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Set up the frontend (React with Vite)
cd ../frontend
npm install

echo "Setup complete. To start the development server:"
echo "1. Activate the Flask virtual environment: source backend/venv/bin/activate"
echo "2. Run the Flask server: python backend/app.py"
echo "3. Start the Vite development server: npm run dev in the frontend directory."