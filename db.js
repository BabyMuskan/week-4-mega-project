const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // 1. Check if already connected (prevents duplicate connection attempts)
    if (mongoose.connection.readyState === 1) {
      console.log('MongoDB is already connected.');
      return;
    }

    // 2. Validate that MONGO_URI is defined in environment variables
    if (!process.env.MONGO_URI) {
      console.error('FATAL ERROR: MONGO_URI is missing in Environment Variables!');
      process.exit(1);
    }

    // 3. Connect to MongoDB Atlas
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(MongoDB Connected Successfully: ${conn.connection.host});
  } catch (err) {
    // 4. Handle connection errors cleanly without throwing unhandled exceptions
    console.error('Database connection failed:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;