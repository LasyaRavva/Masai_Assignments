import { createNavbar } from '../components/navbar.js';
import { createFooter } from '../components/footer.js';

document.getElementById('navbar-root').appendChild(createNavbar());
document.getElementById('footer-root').appendChild(createFooter());

const signupForm = document.getElementById('signup-form');
const messageDiv = document.getElementById('message');

function showMessage(text, type) {
  messageDiv.textContent = text;
  messageDiv.className = `message ${type}`;
  setTimeout(() => {
    messageDiv.textContent = '';
    messageDiv.className = 'message';
  }, 3000);
}

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  
  if (password !== confirmPassword) {
    showMessage('Passwords do not match!', 'error');
    return;
  }
  
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  
  if (users.some(user => user.email === email)) {
    showMessage('Email already registered!', 'error');
    return;
  }
  
  users.push({ name, email, password });
  localStorage.setItem('users', JSON.stringify(users));
  
  showMessage('Account created successfully! Redirecting to login...', 'success');
  
  setTimeout(() => {
    window.location.href = 'login.html';
  }, 1500);
});
