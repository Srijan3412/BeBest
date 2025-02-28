from flask import Flask, request, jsonify, render_template
import os
import json

app = Flask(__name__)

# Directory to save uploaded profile images
UPLOAD_FOLDER = 'uploads/'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# Path to the JSON file
JSON_FILE_PATH = 'user_profile.json'

# Function to load user data from JSON file
def load_user_data():
    if os.path.exists(JSON_FILE_PATH):
        with open(JSON_FILE_PATH, 'r') as f:
            return json.load(f)
    return {}

# Function to save user data to JSON file
def save_user_data(data):
    with open(JSON_FILE_PATH, 'w') as f:
        json.dump(data, f, indent=4)

@app.route('/')
def index():
    return render_template('profile_form.html')  # Serve the HTML form

@app.route('/update_profile', methods=['POST'])
def update_profile():
    # Get form data
    name = request.form.get('name')
    email = request.form.get('email')
    age = request.form.get('age')
    location = request.form.get('location')
    profile_image = request.files.get('profile_image')
    skills = request.form.getlist('skills')  # Get skills as a list

    # Prepare user data
    user_data = {
        'name': name,
        'email': email,
        'age': age,
        'location': location,
        'profile_image': None,
        'skills': skills  # Include skills in the user data
    }

    # Save the profile image if it exists
    if profile_image:
        image_path = os.path.join(UPLOAD_FOLDER, profile_image.filename)
        profile_image.save(image_path)
        user_data['profile_image'] = image_path

    # Save user data to JSON file
    save_user_data(user_data)

    # Return a success message
    return jsonify({'message': 'Profile updated successfully!', 'data': user_data})

if __name__ == '__main__':
    app.run(debug=True,port=8014)

