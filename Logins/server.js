const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const SECRET_KEY = 'Gggfbwhkgfqwtudfyfgu;kfvgbw46786'; 
const USERS_FILE = './users.json'; 

function readUsers() {
    if (!fs.existsSync(USERS_FILE)) {
        return [];
    }
    const data = fs.readFileSync(USERS_FILE);
    return JSON.parse(data);
}

function writeUsers(users) {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const users = readUsers();
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        const token = jwt.sign({ username: user.username, name: user.name }, SECRET_KEY, { expiresIn: '1h' });
        return res.json({ token });
    }
    res.status(401).json({ message: 'Invalid credentials' });
});

app.post('/signup', (req, res) => {
    const { username, password, name } = req.body;

    const users = readUsers();
    if (users.find(u => u.username === username)) {
        return res.status(400).json({ message: 'Username already exists' });
    }

    users.push({ username, password, name });
    writeUsers(users);

    res.status(201).json({ message: 'User registered successfully' });
});

app.get('/verify', (req, res) => {
    const token = req.headers['authorization'];

    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        res.json({ isAuthenticated: true, name: decoded.name });
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
