const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            console.log("MONGO_URI not found in environment variables. Running without DB.");
            return;
        }
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected Successfully!");
    } catch (error) {
        console.error("MongoDB Connection Error:", error.message);
        // Do not crash the application process
    }
};

module.exports = connectDB;