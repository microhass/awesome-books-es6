import { DateTime } from '../node_modules/luxon/build/es6/luxon.js';

const updateTime = () => {
  const dateContainer = document.querySelector('#time');
  const date = DateTime.now().toLocaleString(
    DateTime.DATETIME_MED_WITH_SECONDS,
  );
  dateContainer.innerHTML = date;
};

export default updateTime;
