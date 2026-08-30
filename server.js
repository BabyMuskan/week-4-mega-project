require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const Metric = require('./models/Metric');
const authRoutes = require('./routes/auth');
const protect = require('./middleware/authMiddleware');

const app = express();
app.use(express.static(__dirname));

// Middleware
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);

// Connect to Database
connectDB();

// CREATE - Add a new metric
app.post('/api/metrics', protect, async (req, res) => {
    try {
        const metric = await Metric.create(req.body);
        res.status(201).json(metric);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// READ - Get all metrics
app.get('/api/metrics', protect, async (req, res) => {
    try {
        const metrics = await Metric.find();
        res.json(metrics);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// UPDATE - Update a metric
app.put('/api/metrics/:id', protect, async (req, res) => {
    try {
        const metric = await Metric.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!metric) {
            return res.status(404).json({ message: 'Metric not found' });
        }

        res.json(metric);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE - Delete a metric
app.delete('/api/metrics/:id', protect, async (req, res) => {
    try {
        const metric = await Metric.findByIdAndDelete(req.params.id);

        if (!metric) {
            return res.status(404).json({ message: 'Metric not found' });
        }

        res.json({ message: 'Metric deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Test route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Start local server only outside production
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== "production") {
    app.listen(PORT, () => {
        console.log(Server running on port ${PORT});
    });
}

// Export app for Vercel
module.exports = app;