import { createNavbar } from '../components/navbar.js';
import { createFooter } from '../components/footer.js';

document.getElementById('navbar-root').appendChild(createNavbar());
document.getElementById('footer-root').appendChild(createFooter());

const loginForm = document.getElementById('login-form');
const messageDiv = document.getElementById('message');

function showMessage(text, type) {
  messageDiv.textContent = text;
  messageDiv.className = `message ${type}`;
  setTimeout(() => {
    messageDiv.textContent = '';
    messageDiv.className = 'message';
  }, 3000);
}

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  
  const user = users.find(u => u.email === email && u.password === password);
  
  if (!user) {
    showMessage('Invalid email or password!', 'error');
    return;
  }
  
  localStorage.setItem('currentUser', JSON.stringify({ name: user.name, email: user.email }));
  
  showMessage('Login successful! Redirecting...', 'success');
  
  setTimeout(() => {
    window.location.href = 'todos.html';
  }, 1000);
});
