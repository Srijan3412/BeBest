from flask import Flask, request, jsonify, render_template
import json
import os

app = Flask(__name__)

# Path to the JSON file
JSON_FILE = 'user_messages.json'

# Function to load messages from JSON file
def load_messages():
    if os.path.exists(JSON_FILE):
        with open(JSON_FILE, 'r') as f:
            try:
                return json.load(f)
            except json.JSONDecodeError:
                print("Error decoding JSON. Returning empty list.")
                return []
    return []

# Function to save messages to JSON file
def save_message(message):
    messages = load_messages()
    messages.append(message)
    with open(JSON_FILE, 'w') as f:
        json.dump(messages, f, indent=4)  # Save with indentation for readability
        print(f"Message saved: {message}")

@app.route('/')
def index():
    return render_template('index.html')  # Render your HTML page

@app.route('/update_profile', methods=['POST'])
def update_profile():
    data = request.get_json()  # Get JSON data from the request
    name = data.get('name')
    email = data.get('email')
    subject = data.get('subject')
    message = data.get('message')

    print(f"Received data: Name: {name}, Email: {email}, Subject: {subject}, Message: {message}")

    user_message = {
        'name': name,
        'email': email,
        'subject': subject,
        'message': message
    }
    save_message(user_message)  # Save the message to JSON
    return jsonify(user_message)

if __name__ == '__main__':
    app.run(debug=True)