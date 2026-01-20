import express from 'express';
import todoRouter from './routes/todos.routes.js';
import loggerMiddleware from './middleware/logger.middleware.js';

const app = express();
const PORT = 3000;

// App-level middleware
app.use(loggerMiddleware);
app.use(express.json());

// Routes
app.use('/todos', todoRouter);

// Root endpoint
app.get('/', (_req, res) => {
  return res.status(200).json({
    status: 'success',
    message: 'Todo API with middleware is running'
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
