const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
require('dotenv').config();

const app = express();

// 1. Top-Level CORS Middleware (Fixes CORS Policy Error)
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// 2. Parse incoming JSON payloads
app.use(express.json());

// 3. Connect to Database safely
connectDB();

// 4. Base / Health Check Route
app.get('/', (req, res) => {
    res.send('API is running successfully!');
});

// 5. /api/data Endpoint (Fixes 502 Bad Gateway on Dashboard load)
app.get('/api/data', (req, res) => {
    res.json({
        totalRecords: 120,
        activeSessions: 45,
        growthRate: '15%',
        status: 'success'
    });
});

// 6. /api/login Endpoint (Fixes Login Modal Submission)
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    res.json({
        message: "Login successful",
        token: "sample-jwt-token",
        user: { email }
    });
});

// 7. Dynamic Port Binding for Railway Environment
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});