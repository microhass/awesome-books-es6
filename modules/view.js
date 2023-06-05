import { getStoredBooks } from './storage.js';

const bookList = document.querySelector('.book-list');

export const renderBooks = () => {
  const books = getStoredBooks();

  const allBooks = books
    .map(
      (book) => `
    <li id=${book.id}>
       <p>"${book.title}" by ${book.author}</p>
       <button id="remove" type="button">Remove</button>
    </li>
  `,
    )
    .join('');
  bookList.innerHTML = allBooks;
};

export const displayMessage = (message, msgStatus) => {
  const msg = document.querySelector('.msg');
  msg.innerText = message;
  msg.classList.add(msgStatus);

  setTimeout(() => {
    msg.classList.remove(msgStatus);
    msg.innerText = '';
  }, 3000);
};

export const clearInputFields = () => {
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
};
