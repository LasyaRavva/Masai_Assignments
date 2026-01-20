import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();

// ESM __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, '..', '..', 'db.json');

// Helper function to read database
const readDB = () => {
  try {
    const data = fs.readFileSync(dbPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading database:', error);
    return { users: [], todos: [] };
  }
};

// Helper function to write database
const writeDB = (data) => {
  try {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error('Error writing to database:', error);
    return false;
  }
};

// Helper function to generate new todo ID
const generateTodoId = (todos) => {
  if (todos.length === 0) return 1;
  return Math.max(...todos.map(t => t.todoId)) + 1;
};

// POST /todos/add - Create a new todo
router.post('/add', (req, res) => {
  try {
    const { title, description, completed, userId } = req.body;

    // Validation
    if (!title) {
      return res.status(400).json({
        status: 'error',
        message: 'Title is required'
      });
    }

    const db = readDB();

    // Validate userId exists if provided
    if (userId && !db.users.find(u => u.userId === userId)) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid userId'
      });
    }

    const newTodo = {
      todoId: generateTodoId(db.todos),
      title,
      description: description || '',
      completed: completed || false,
      userId: userId || null
    };

    db.todos.push(newTodo);
    writeDB(db);

    res.status(201).json({
      status: 'success',
      message: 'Todo created successfully',
      data: newTodo
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Internal server error'
    });
  }
});

// GET /todos - Get all todos
router.get('/', (req, res) => {
  try {
    const db = readDB();
    res.status(200).json({
      status: 'success',
      data: db.todos
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Internal server error'
    });
  }
});

// GET /todos/:todoId - Get a single todo
router.get('/:todoId', (req, res) => {
  try {
    const { todoId } = req.params;

    // Validate todoId is a number
    if (isNaN(todoId)) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid todoId'
      });
    }

    const db = readDB();
    const todo = db.todos.find(t => t.todoId === parseInt(todoId));

    if (!todo) {
      return res.status(404).json({
        status: 'error',
        message: 'Todo not found'
      });
    }

    res.status(200).json({
      status: 'success',
      data: todo
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Internal server error'
    });
  }
});

// PUT /todos/update/:todoId - Update a todo
router.put('/update/:todoId', (req, res) => {
  try {
    const { todoId } = req.params;
    const { title, description, completed, userId } = req.body;

    // Validate todoId is a number
    if (isNaN(todoId)) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid todoId'
      });
    }

    const db = readDB();
    const todoIndex = db.todos.findIndex(t => t.todoId === parseInt(todoId));

    if (todoIndex === -1) {
      return res.status(404).json({
        status: 'error',
        message: 'Todo not found'
      });
    }

    // Validate userId if provided
    if (userId && !db.users.find(u => u.userId === userId)) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid userId'
      });
    }

    // Update fields
    if (title !== undefined) db.todos[todoIndex].title = title;
    if (description !== undefined) db.todos[todoIndex].description = description;
    if (completed !== undefined) db.todos[todoIndex].completed = completed;
    if (userId !== undefined) db.todos[todoIndex].userId = userId;

    writeDB(db);

    res.status(200).json({
      status: 'success',
      message: 'Todo updated successfully',
      data: db.todos[todoIndex]
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Internal server error'
    });
  }
});

// DELETE /todos/delete/:todoId - Delete a todo
router.delete('/delete/:todoId', (req, res) => {
  try {
    const { todoId } = req.params;

    // Validate todoId is a number
    if (isNaN(todoId)) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid todoId'
      });
    }

    const db = readDB();
    const todoIndex = db.todos.findIndex(t => t.todoId === parseInt(todoId));

    if (todoIndex === -1) {
      return res.status(404).json({
        status: 'error',
        message: 'Todo not found'
      });
    }

    const deletedTodo = db.todos.splice(todoIndex, 1);
    writeDB(db);

    res.status(200).json({
      status: 'success',
      message: 'Todo deleted successfully',
      data: deletedTodo[0]
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Internal server error'
    });
  }
});

export default router;
