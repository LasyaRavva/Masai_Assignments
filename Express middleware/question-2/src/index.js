import express from 'express';
import userRouter from './routes/users.routes.js';

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/users', userRouter);

// Root endpoint
app.get('/', (_req, res) => {
  return res.status(200).json({
    status: 'success',
    message: 'User Signup with Multer & Cloudinary API',
    endpoint: 'POST /users/signup'
  });
});

// 404 handler
app.use((_req, res) => {
  return res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
