import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getFirestore, collection, addDoc, getDocs, updateDoc, deleteDoc, doc, onSnapshot } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyC9YXh3-6j17V1gm-TbMQtrZmACSPG2oGQ",
    authDomain: "book-management-web-app-465d2.firebaseapp.com",
    projectId: "book-management-web-app-465d2",
    storageBucket: "book-management-web-app-465d2.firebasestorage.app",
    messagingSenderId: "161173870340",
    appId: "1:161173870340:web:436974acfe5e3a4acb6251",
    measurementId: "G-7GR83KM3CN"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const booksCollection = collection(db, 'books');

const form = document.getElementById('add-book-form');
const grid = document.getElementById('books-grid');
const loading = document.getElementById('loading');
const empty = document.getElementById('empty');
const modal = document.getElementById('view-modal');
const modalBody = document.getElementById('modal-body');

function setupRealtimeListener() {
  onSnapshot(booksCollection, (snapshot) => {
    loading.style.display = 'none';
    
    if (snapshot.empty) {
      grid.innerHTML = '';
      empty.style.display = 'block';
      return;
    }

    empty.style.display = 'none';
    renderBooks(snapshot.docs);
  });
}

function renderBooks(docs) {
  grid.innerHTML = '';
  
  docs.forEach(doc => {
    const book = { id: doc.id, ...doc.data() };
    const card = createBookCard(book);
    grid.appendChild(card);
  });
}

function createBookCard(book) {
  const card = document.createElement('div');
  card.className = 'book-card';
  
  card.innerHTML = `
    <img src="${book.coverImageURL}" alt="${book.title}" onerror="this.src='https://via.placeholder.com/300x400?text=No+Image'">
    <div class="book-info">
      <div class="book-title">${book.title}</div>
      <div class="book-author">by ${book.author}</div>
      <div class="book-price">$${Number(book.price).toFixed(2)}</div>
      <div class="book-actions">
        <button class="btn btn-update" onclick="updateAuthor('${book.id}', '${book.author}')">Update Author</button>
        <button class="btn btn-delete" onclick="deleteBook('${book.id}')">Delete</button>
        <button class="btn btn-view" onclick="viewDetails('${book.id}')">View Details</button>
      </div>
    </div>
  `;
  
  return card;
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const newBook = {
    title: document.getElementById('title').value.trim(),
    author: document.getElementById('author').value.trim(),
    price: parseFloat(document.getElementById('price').value),
    coverImageURL: document.getElementById('coverImageURL').value.trim()
  };

  try {
    await addDoc(booksCollection, newBook);
    form.reset();
    alert('Book added successfully!');
  } catch (error) {
    console.error('Error adding book:', error);
    alert('Failed to add book. Please try again.');
  }
});

window.updateAuthor = async (bookId, currentAuthor) => {
  const newAuthor = prompt('Update author name:', currentAuthor);
  
  if (!newAuthor || newAuthor.trim() === '') {
    alert('Author name cannot be empty');
    return;
  }

  try {
    const bookRef = doc(db, 'books', bookId);
    await updateDoc(bookRef, { author: newAuthor.trim() });
    alert('Author updated successfully!');
  } catch (error) {
    console.error('Error updating author:', error);
    alert('Failed to update author. Please try again.');
  }
};

window.deleteBook = async (bookId) => {
  if (!confirm('Are you sure you want to delete this book?')) return;

  try {
    await deleteDoc(doc(db, 'books', bookId));
    alert('Book deleted successfully!');
  } catch (error) {
    console.error('Error deleting book:', error);
    alert('Failed to delete book. Please try again.');
  }
};

window.viewDetails = async (bookId) => {
  try {
    const snapshot = await getDocs(booksCollection);
    const book = snapshot.docs.find(doc => doc.id === bookId);
    
    if (!book) {
      alert('Book not found');
      return;
    }

    const data = book.data();
    modalBody.innerHTML = `
      <p><strong>Title:</strong> ${data.title}</p>
      <p><strong>Author:</strong> ${data.author}</p>
      <p><strong>Price:</strong> $${Number(data.price).toFixed(2)}</p>
      <p><strong>Cover:</strong></p>
      <img src="${data.coverImageURL}" style="max-width: 100%; border-radius: 8px;" onerror="this.src='https://via.placeholder.com/300x400?text=No+Image'">
    `;
    
    modal.classList.add('active');
  } catch (error) {
    console.error('Error fetching book details:', error);
    alert('Failed to load book details.');
  }
};

window.closeModal = () => {
  modal.classList.remove('active');
};

setupRealtimeListener();

async function addDummyBooks() {
  const dummyBooks = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 12.99, coverImageURL: "https://images-na.ssl-images-amazon.com/images/I/81QuEGw8VPL.jpg" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", price: 14.99, coverImageURL: "https://images-na.ssl-images-amazon.com/images/I/71FxgtFKcQL.jpg" },
    { title: "1984", author: "George Orwell", price: 13.99, coverImageURL: "https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL.jpg" },
    { title: "Pride and Prejudice", author: "Jane Austen", price: 11.99, coverImageURL: "https://images-na.ssl-images-amazon.com/images/I/71Q1tPupKjL.jpg" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", price: 10.99, coverImageURL: "https://images-na.ssl-images-amazon.com/images/I/8125BDk3l9L.jpg" },
    { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", price: 15.99, coverImageURL: "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg" }
  ];

  for (const book of dummyBooks) {
    await addDoc(booksCollection, book);
  }
  console.log('Dummy books added!');
}
