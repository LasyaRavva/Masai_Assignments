import express from 'express';
import userRoutes from './routes/users.routes.js';
import todoRoutes from './routes/todos.routes.js';

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/users', userRoutes);
app.use('/todos', todoRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Express Routing API is running',
    endpoints: {
      users: [
        'POST /users/add',
        'GET /users',
        'GET /users/:userId',
        'PUT /users/update/:userId',
        'DELETE /users/delete/:userId'
      ],
      todos: [
        'POST /todos/add',
        'GET /todos',
        'GET /todos/:todoId',
        'PUT /todos/update/:todoId',
        'DELETE /todos/delete/:todoId'
      ]
    }
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Route not found'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
