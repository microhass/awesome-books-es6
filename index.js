import switchPage from './modules/pagination.js';
import isValid from './modules/validate.js';
import * as storage from './modules/storage.js';
import * as view from './modules/view.js';

const form = document.querySelector('.form');

const list = document.querySelector('#list');
const addBook = document.querySelector('#addbook');
const contact = document.querySelector('#contact');

[list, addBook, contact].forEach((link) => {
  link.addEventListener('click', () => {
    switchPage(link);
  });
});

window.addEventListener('load', () => {
  view.renderBooks();
});

form.addEventListener('submit', (e) => {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  let id = Math.random() * 2;
  id += title;

  if (!isValid(title) && !isValid(author)) {
    view.displayMessage('Please fill all fields!');
  }

  const newBook = { id, title, author };

  storage.saveBookToStorage(newBook);
  view.renderBooks();

  //     // Display book on the UI
  //     ui.displayBooks(newBook);

  //     // Save books data to localStorage
  //     UI.addToLocalStorage(newBook);

  //     document.querySelector('.list').style.display = 'block';
  //     document.querySelector('.form-field').style.display = 'none';
  //     document.querySelector('.contact').style.display = 'none';

  //     // display message
  //     UI.getMessage('Book added successfully', 'success');

  //     document.querySelector('#title').value = '';
  //     document.querySelector('#author').value = '';
  //   }
  // prevent default submit
  e.preventDefault();
});