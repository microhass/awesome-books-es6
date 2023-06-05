export const getStoredBooks = () =>
  JSON.parse(localStorage.getItem('books')) || [];

export const saveBookToStorage = (book) => {
  const books = getStoredBooks();
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
};

export const removeFromStorage = (id) => {
  let books = getStoredBooks();
  books = books.filter((book) => book.id !== id);
  localStorage.setItem('books', JSON.stringify(books));
};
