const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
require('dotenv').config();

const app = express();

// Global CORS Configuration
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Database connection
connectDB().catch(err => console.log("DB Warning:", err.message));

app.get('/', (req, res) => {
    res.send('API is running successfully!');
});

app.get('/api/data', (req, res) => {
    res.json({
        totalRecords: 120,
        activeSessions: 45,
        growthRate: '15%',
        status: 'success'
    });
});

app.post('/api/login', (req, res) => {
    res.json({
        message: "Login successful",
        token: "sample-jwt-token"
    });
});

// Railway dynamic PORT selection
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on port ${PORT}`);
});