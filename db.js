const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log('MongoDB is already connected.');
      return;
    }

    if (!process.env.MONGO_URI) {
      console.warn('WARNING: MONGO_URI is missing in Environment Variables!');
      return;
    }

    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(MongoDB Connected Successfully: ${conn.connection.host});
  } catch (err) {
    console.error('Database connection failed:', err.message);
  }
};

module.exports = connectDB;