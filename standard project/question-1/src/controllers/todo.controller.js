import {
  createTodo,
  deleteTodo,
  getAllTodos,
  getTodoById,
  updateTodo
} from '../models/todo.model.js';

export const listTodos = async (_req, res, next) => {
  try {
    const todos = await getAllTodos();
    return res.status(200).json({ data: todos });
  } catch (error) {
    return next(error);
  }
};

export const getTodo = async (req, res, next) => {
  try {
    const todo = await getTodoById(req.params.id);

    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    return res.status(200).json({ data: todo });
  } catch (error) {
    return next(error);
  }
};

export const createTodoHandler = async (req, res, next) => {
  try {
    const { title, description = '' } = req.body;

    if (!title || typeof title !== 'string' || !title.trim()) {
      return res.status(400).json({ error: 'Title is required and must be a non-empty string' });
    }

    const newTodo = await createTodo({ title, description });
    return res.status(201).json({ data: newTodo });
  } catch (error) {
    return next(error);
  }
};

export const updateTodoHandler = async (req, res, next) => {
  try {
    const { title, description, completed } = req.body;

    if (title !== undefined && (typeof title !== 'string' || !title.trim())) {
      return res.status(400).json({ error: 'Title must be a non-empty string when provided' });
    }

    if (description !== undefined && typeof description !== 'string') {
      return res.status(400).json({ error: 'Description must be a string when provided' });
    }

    if (completed !== undefined && typeof completed !== 'boolean') {
      return res.status(400).json({ error: 'Completed must be a boolean when provided' });
    }

    if (title === undefined && description === undefined && completed === undefined) {
      return res.status(400).json({ error: 'At least one field (title, description, completed) must be provided' });
    }

    const updated = await updateTodo(req.params.id, { title, description, completed });

    if (!updated) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    return res.status(200).json({ data: updated });
  } catch (error) {
    return next(error);
  }
};

export const deleteTodoHandler = async (req, res, next) => {
  try {
    const deleted = await deleteTodo(req.params.id);

    if (!deleted) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    return res.status(200).json({ message: 'Todo deleted successfully' });
  } catch (error) {
    return next(error);
  }
};
