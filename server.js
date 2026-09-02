const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
require('dotenv').config();

const app = express();

// Connect Database
connectDB();

// CORS for local Live Server
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Root test route
app.get('/', (req, res) => {
    res.send('API is running successfully!');
});

// Mock /api/data endpoint to fix 502 Bad Gateway
app.get('/api/data', (req, res) => {
    res.json({ message: "Data fetched successfully!", status: "success" });
});

// Login endpoint (Agar aap ke paas auth route hai)
app.post('/api/login', (req, res) => {
    res.json({ message: "Login successful", token: "sample-jwt-token" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});