import switchPage from './modules/pagination.js';
import isValid from './modules/validate.js';
import * as storage from './modules/storage.js';
import * as view from './modules/view.js';

const form = document.querySelector('.form');

const list = document.querySelector('#list');
const addBook = document.querySelector('#addbook');
const contact = document.querySelector('#contact');
const bookList = document.querySelector('.book-list');

window.addEventListener('load', () => {
  [list, addBook, contact].forEach((link) => {
    link.addEventListener('click', () => {
      switchPage(link);
    });
  });

  view.renderBooks();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const id = Math.random() * 2 + title;

  if (!isValid(title) && !isValid(author)) {
    return view.displayMessage('Please fill all fields!', 'error');
  }

  const newBook = { id, title, author };

  storage.saveBookToStorage(newBook);
  view.renderBooks();
  switchPage(list);
  view.displayMessage('Book added successfully', 'success');
  view.clearInputFields();
});

bookList.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.id !== 'remove') return;
  const book = e.target.parentElement;

  storage.removeFromStorage(book.id);
  view.renderBooks();
  view.displayMessage('Book removed successfully', 'success');
});
