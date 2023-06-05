import switchPage from './modules/pagination.js';

const form = document.querySelector('.form');

const list = document.querySelector('#list');
const addBook = document.querySelector('#addbook');
const contact = document.querySelector('#contact');

[list, addBook, contact].forEach((link, index) => {
  link.addEventListener('click', () => {
    switchPage(link);
  });
});