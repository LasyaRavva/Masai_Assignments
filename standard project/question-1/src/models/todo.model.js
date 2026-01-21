import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { v4 as uuid } from 'uuid';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.resolve(__dirname, '..', '..', 'data', 'todos.json');

const readTodos = async () => {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf8');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    if (error.code === 'ENOENT') {
      await fs.writeFile(DATA_FILE, '[]', 'utf8');
      return [];
    }
    throw error;
  }
};

const writeTodos = async (todos) => {
  await fs.writeFile(DATA_FILE, JSON.stringify(todos, null, 2), 'utf8');
};

export const getAllTodos = async () => {
  return readTodos();
};

export const getTodoById = async (id) => {
  const todos = await readTodos();
  return todos.find((todo) => todo.id === id) || null;
};

export const createTodo = async ({ title, description = '' }) => {
  const todos = await readTodos();

  const newTodo = {
    id: uuid(),
    title: title.trim(),
    description: description.trim(),
    completed: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  todos.push(newTodo);
  await writeTodos(todos);

  return newTodo;
};

export const updateTodo = async (id, updates) => {
  const todos = await readTodos();
  const index = todos.findIndex((todo) => todo.id === id);

  if (index === -1) {
    return null;
  }

  const existing = todos[index];
  const updatedTodo = {
    ...existing,
    ...(updates.title !== undefined ? { title: updates.title.trim() } : {}),
    ...(updates.description !== undefined ? { description: updates.description.trim() } : {}),
    ...(updates.completed !== undefined ? { completed: Boolean(updates.completed) } : {}),
    updatedAt: new Date().toISOString()
  };

  todos[index] = updatedTodo;
  await writeTodos(todos);

  return updatedTodo;
};

export const deleteTodo = async (id) => {
  const todos = await readTodos();
  const index = todos.findIndex((todo) => todo.id === id);

  if (index === -1) {
    return false;
  }

  todos.splice(index, 1);
  await writeTodos(todos);
  return true;
};
