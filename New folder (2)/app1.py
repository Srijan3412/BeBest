from flask import Flask, render_template, request, jsonify
import json
import os

app = Flask(__name__)

# Path to the JSON file
JSON_FILE = 'user_profile.json'

# Function to load user profile from JSON file
def load_profile():
    if os.path.exists(JSON_FILE):
        with open(JSON_FILE, 'r') as f:
            try:
                return json.load(f)
            except json.JSONDecodeError:
                print("Error decoding JSON. Returning default profile.")
                return {"name": "", "email": "", "age": "", "location": ""}
    return {"name": "", "email": "", "age": "", "location": ""}

# Function to save user profile to JSON file
def save_profile(profile):
    with open(JSON_FILE, 'w') as f:
        json.dump(profile, f)
        print(f"Profile saved: {profile}")

@app.route('/')
def index1():
    user_profile = load_profile()
    return render_template('index1.html', profile=user_profile)

@app.route('/update_profile', methods=['POST'])
def update_profile():
    name = request.form.get('name')
    email = request.form.get('email')
    age = request.form.get('age')
    location = request.form.get('location')

    print(f"Received data: Name: {name}, Email: {email}, Age: {age}, Location: {location}")

    user_profile = {
        'name': name,
        'email': email,
        'age': age,
        'location': location
    }
    save_profile(user_profile)
    return jsonify(user_profile)

@app.route('/view_profile')
def view_profile():
    user_profile = load_profile()
    return render_template('view_profile.html', profile=user_profile)

@app.route('/view_json')
def view_json():
    # Load the profile data from the JSON file
    user_profile = load_profile()
    return render_template('view_json.html', profile=user_profile)

if __name__ == '__main__':
    app.run(debug=True, port=8080)