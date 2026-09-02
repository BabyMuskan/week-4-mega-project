const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
require('dotenv').config();

const app = express();

// 1. MUST BE FIRST: Configure Top-Level CORS Policy
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// 2. Middleware to parse JSON payloads
app.use(express.json());

// 3. Connect to MongoDB Atlas
connectDB();

// Root Test Route
app.get('/', (req, res) => {
    res.send('API is running successfully!');
});

// Mock /api/data Endpoint (Fixes 502 & CORS issue on dashboard load)
app.get('/api/data', (req, res) => {
    res.json({
        totalRecords: 120,
        activeSessions: 45,
        growthRate: '15%',
        status: 'success'
    });
});

// Mock /api/login Endpoint (Fixes auth modal submission)
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    res.json({
        message: "Login successful",
        token: "sample-jwt-token",
        user: { email }
    });
});

// Port Binding for Railway Environment
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});