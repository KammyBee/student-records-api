const mongoose = require('mongoose');
 // Make sure this is called early

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost/studentDB');
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
