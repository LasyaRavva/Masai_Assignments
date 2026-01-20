import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import rateLimiterMiddleware from '../middleware/rateLimiter.middleware.js';
import validateTodoMiddleware from '../middleware/validateTodo.middleware.js';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, '..', '..', 'db.json');

const readDB = () => {
  try {
    const data = fs.readFileSync(dbPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading database:', error);
    return { todos: [] };
  }
};

const writeDB = (data) => {
  try {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error('Error writing database:', error);
    return false;
  }
};

const generateTodoId = (todos) => {
  if (!Array.isArray(todos) || todos.length === 0) return 1;
  return Math.max(...todos.map((t) => t.todoId)) + 1;
};

// POST /todos/add - create todo (with validation)
router.post('/add', validateTodoMiddleware, (req, res) => {
  const db = readDB();
  const newTodo = {
    todoId: generateTodoId(db.todos),
    title: req.body.title,
    completed: false
  };

  db.todos.push(newTodo);
  writeDB(db);

  return res.status(201).json({
    status: 'success',
    data: newTodo
  });
});

// GET /todos - list todos (rate limited)
router.get('/', rateLimiterMiddleware, (_req, res) => {
  const db = readDB();
  return res.status(200).json({
    status: 'success',
    data: db.todos
  });
});

// GET /todos/:todoId - fetch single todo
router.get('/:todoId', (req, res) => {
  const { todoId } = req.params;
  const id = parseInt(todoId, 10);

  if (Number.isNaN(id)) {
    return res.status(400).json({ error: 'Invalid todoId' });
  }

  const db = readDB();
  const todo = db.todos.find((t) => t.todoId === id);

  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  return res.status(200).json({
    status: 'success',
    data: todo
  });
});

// PUT /todos/update/:todoId - update todo
router.put('/update/:todoId', (req, res) => {
  const { todoId } = req.params;
  const id = parseInt(todoId, 10);

  if (Number.isNaN(id)) {
    return res.status(400).json({ error: 'Invalid todoId' });
  }

  const allowedKeys = ['title', 'completed'];
  const keys = Object.keys(req.body || {});
  const hasInvalidKey = keys.some((key) => !allowedKeys.includes(key));

  if (hasInvalidKey) {
    return res.status(400).json({ error: 'Only title and completed can be updated' });
  }

  if (keys.length === 0) {
    return res.status(400).json({ error: 'Provide fields to update' });
  }

  const db = readDB();
  const todoIndex = db.todos.findIndex((t) => t.todoId === id);

  if (todoIndex === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  const todoToUpdate = db.todos[todoIndex];

  if (req.body.title !== undefined) {
    if (typeof req.body.title !== 'string' || req.body.title.trim().length === 0) {
      return res.status(400).json({ error: 'Title must be a non-empty string' });
    }
    todoToUpdate.title = req.body.title.trim();
  }

  if (req.body.completed !== undefined) {
    if (typeof req.body.completed !== 'boolean') {
      return res.status(400).json({ error: 'Completed must be a boolean' });
    }
    todoToUpdate.completed = req.body.completed;
  }

  db.todos[todoIndex] = todoToUpdate;
  writeDB(db);

  return res.status(200).json({
    status: 'success',
    data: todoToUpdate
  });
});

// DELETE /todos/delete/:todoId - delete todo
router.delete('/delete/:todoId', (req, res) => {
  const { todoId } = req.params;
  const id = parseInt(todoId, 10);

  if (Number.isNaN(id)) {
    return res.status(400).json({ error: 'Invalid todoId' });
  }

  const db = readDB();
  const todoIndex = db.todos.findIndex((t) => t.todoId === id);

  if (todoIndex === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  const [deletedTodo] = db.todos.splice(todoIndex, 1);
  writeDB(db);

  return res.status(200).json({
    status: 'success',
    data: deletedTodo
  });
});

export default router;
