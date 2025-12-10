import { createNavbar } from '../components/navbar.js';
import { createFooter } from '../components/footer.js';
import { displayTodos } from '../modules/displayTodos.js';

const currentUser = JSON.parse(localStorage.getItem('currentUser'));

if (!currentUser) {
  window.location.href = 'login.html';
}

document.getElementById('navbar-root').appendChild(createNavbar());
document.getElementById('footer-root').appendChild(createFooter());

const todosRoot = document.getElementById('todos-root');
const loadingDiv = document.getElementById('loading');

async function fetchAndDisplayTodos() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    
    const first20 = data.slice(0, 20);
    
    loadingDiv.style.display = 'none';
    displayTodos(first20);
  } catch (error) {
    loadingDiv.textContent = 'Failed to load todos. Please try again.';
    loadingDiv.style.color = '#dc3545';
  }
}

fetchAndDisplayTodos();
