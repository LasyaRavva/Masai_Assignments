const API_URL = 'https://jsonplaceholder.typicode.com/todos';
const STORAGE_KEY = 'todos-q8';

function getTodos() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Failed to load todos from localStorage', e);
    return [];
  }
}

function saveTodos(todos) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch (e) {
    console.error('Failed to save todos to localStorage', e);
  }
}

async function fetchTodos() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Failed to fetch todos');
    const data = await response.json();
    const first20 = data.slice(0, 20);
    saveTodos(first20);
    renderTodos();
  } catch (error) {
    console.error('Error fetching todos:', error);
    alert('Failed to fetch todos. Please try again.');
  }
}

function renderTodos() {
  const todos = getTodos();
  const list = document.getElementById('todos');
  const emptyMsg = document.getElementById('empty');

  list.innerHTML = '';

  if (todos.length === 0) {
    emptyMsg.hidden = false;
    return;
  }

  emptyMsg.hidden = true;

  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.className = 'todo-item';
    if (todo.completed) li.classList.add('completed');

    const title = document.createElement('span');
    title.className = 'title';
    title.textContent = todo.title;

    const status = document.createElement('span');
    status.className = `status ${todo.completed ? 'complete' : 'incomplete'}`;
    status.textContent = todo.completed ? 'Complete' : 'Incomplete';

    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'btn toggle';
    toggleBtn.textContent = todo.completed ? 'Undo' : 'Complete';
    toggleBtn.onclick = () => toggleTodo(index);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn delete';
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => deleteTodo(index);

    li.appendChild(title);
    li.appendChild(status);
    li.appendChild(toggleBtn);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}

function toggleTodo(index) {
  const todos = getTodos();
  if (todos[index]) {
    todos[index].completed = !todos[index].completed;
    saveTodos(todos);
    renderTodos();
  }
}

function deleteTodo(index) {
  const todos = getTodos();
  todos.splice(index, 1);
  saveTodos(todos);
  renderTodos();
}

document.addEventListener('DOMContentLoaded', () => {
  const fetchBtn = document.getElementById('fetch-btn');
  fetchBtn.addEventListener('click', fetchTodos);

  renderTodos();
});
