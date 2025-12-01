const IMAGE_URL = 'https://m.media-amazon.com/images/I/71ZB18P3inL._SY522_.jpg';

document.addEventListener('DOMContentLoaded', () => {
  const titleEl = document.getElementById('title');
  const authorEl = document.getElementById('author');
  const categoryEl = document.getElementById('category');
  const addBtn = document.getElementById('add-book');
  const sortAscBtn = document.getElementById('sort-asc');
  const sortDescBtn = document.getElementById('sort-desc');
  const filterEl = document.getElementById('filter');
  const grid = document.getElementById('books-grid');

  // Load books from localStorage (persist across pages)
  let books = loadBooks();
  let currentFilter = 'All';

  function saveBooks() {
    try {
      localStorage.setItem('books', JSON.stringify(books));
    } catch (e) {
      console.error('Failed to save books to localStorage', e);
    }
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

  function createBookObject(title, author, category) {
    return { title, author, category, imageUrl: IMAGE_URL };
  }

  function renderBooks() {
    grid.innerHTML = '';

    const toShow = books.filter(b => currentFilter === 'All' ? true : b.category === currentFilter);

    if (toShow.length === 0) {
      grid.innerHTML = '<p class="muted">No books to display.</p>';
      return;
    }

    toShow.forEach((book, idx) => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <img src="${book.imageUrl}" alt="book"/>
        <h3>${escapeHtml(book.title)}</h3>
        <p class="meta">${escapeHtml(book.author)}</p>
        <p class="meta">${escapeHtml(book.category)}</p>
        <div class="card-actions">
          <button class="delete" data-index="${idx}">Delete</button>
        </div>
      `;


      const deleteBtn = card.querySelector('.delete');
      deleteBtn.addEventListener('click', () => {

        const bookToRemove = toShow[Number(deleteBtn.dataset.index)];
        const mainIndex = books.findIndex(b =>
          b.title === bookToRemove.title && b.author === bookToRemove.author && b.category === bookToRemove.category
        );
        if (mainIndex > -1) {
          books.splice(mainIndex, 1);
          saveBooks();
          renderBooks();
        }
      });

      grid.appendChild(card);
    });
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  addBtn.addEventListener('click', () => {
    const title = titleEl.value.trim();
    const author = authorEl.value.trim();
    const category = categoryEl.value;

    if (!title || !author) {
      alert('Please provide both title and author.');
      return;
    }

    const book = createBookObject(title, author, category);
    books.push(book);
    saveBooks();

    titleEl.value = '';
    authorEl.value = '';
    categoryEl.value = 'Fiction';

    renderBooks();
  });

  sortAscBtn.addEventListener('click', () => {
    books.sort((a, b) => a.title.localeCompare(b.title));
    saveBooks();
    renderBooks();
  });

  sortDescBtn.addEventListener('click', () => {
    books.sort((a, b) => b.title.localeCompare(a.title));
    saveBooks();
    renderBooks();
  });

  filterEl.addEventListener('change', (e) => {
    currentFilter = e.target.value;
    renderBooks();
  });

  renderBooks();
});
