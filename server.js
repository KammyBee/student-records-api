const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./dbConfig');
const studentRoutes = require('./routes/studentRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(express.json());

// Routes
app.use('/students', studentRoutes);

// Start Server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

