from flask import Flask, request, jsonify, render_template
import json

app = Flask(__name__)

# Load JSON data
def load_data():
    with open('user_profile.json') as f:
        return json.load(f)

@app.route('/')
def index():
    data = load_data()
    return render_template('index.html', data=data)

if __name__ == '__main__':
    app.run(debug=True, port=8013)