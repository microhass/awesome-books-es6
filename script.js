const form = document.querySelector('.form');
const msg = document.querySelector('.msg');
const bookList = document.querySelector('.book-list');

const timeDate = document.querySelector('#time');

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const updateTime = () => {
  const today = new Date();
  const formattedTime = today.toLocaleTimeString();

  const date = today.toLocaleDateString('en-US', options);

  timeDate.innerText = `${date} ${formattedTime}`;
};

setInterval(updateTime, 1000);
