## Installation Instructions

### Backend (Flask)
1. Clone the repository:
   ```bash
   git clone https://github.com/Script-Java/react_flask_template.git
   cd flask_template
   ```

2. Set up a virtual environment and install Flask dependencies:
   ```bash
   cd backend
   python3 -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```

### Frontend (React with Vite)
1. Navigate to the frontend directory and install dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

### Running the Full Application
1. Ensure the Flask backend is running:
   ```bash
   python backend/app.py
   ```

2. Start the Vite development server as mentioned above.
