const cors = require('cors'); // 1. CORS require karein

// ... aapka baqi Express app code ...

app.use(cors()); // 2. app.use(express.json()) se pehle ye line likhein
app.use(express.json());
const express = require('express');
const connectDB = require('./db');
require('dotenv').config();

const app = express();

// Database Connection
connectDB();

// Middlewares
app.use(express.json());

// Main / Test Route
app.get('/', (req, res) => {
    res.send('API is running successfully!');
});

// IMPORTANT: Railway ke dynamic PORT aur '0.0.0.0' host configuration
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});