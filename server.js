require('dotenv').config();
const express = require('express');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/', authRoutes);

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ message: 'User Authentication API is running' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Signup endpoint: http://localhost:${PORT}/signup`);
  console.log(`Profile endpoint: http://localhost:${PORT}/myprofile?name=<name>`);
});

module.exports = app;
