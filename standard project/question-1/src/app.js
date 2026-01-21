import express from 'express';
import morgan from 'morgan';
import todoRouter from './routes/todo.routes.js';
import { errorHandler, notFoundHandler } from './middleware/error.middleware.js';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (_req, res) => {
  return res.status(200).json({
    status: 'ok',
    message: 'Todo API is running',
    endpoints: ['/api/todos']
  });
});

app.use('/api/todos', todoRouter);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
