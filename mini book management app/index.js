// index.js - Render persisted books on the Home page
const HOME_GRID_ID = 'home-books-grid';
const IMAGE_URL = 'https://m.media-amazon.com/images/I/71ZB18P3inL._SY522_.jpg';

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function loadBooks() {
  try {
    const raw = localStorage.getItem('books');
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Failed to load books from localStorage', e);
    return [];
  }
}

function renderHomeBooks() {
  const grid = document.getElementById(HOME_GRID_ID);
  if (!grid) return;

  const books = loadBooks();
  grid.innerHTML = '';

  if (!books.length) {
    grid.innerHTML = '<p class="muted">No books available. Add some from Admin page.</p>';
    return;
  }

  books.forEach(book => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${book.imageUrl || IMAGE_URL}" alt="book" />
      <h3>${escapeHtml(book.title)}</h3>
      <p class="meta">${escapeHtml(book.author)}</p>
      <p class="meta">${escapeHtml(book.category)}</p>
    `;
    grid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', renderHomeBooks);
