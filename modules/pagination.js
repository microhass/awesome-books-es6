const sectionIds = ['list', 'addbook', 'contact'];

const switchPage = (currPage) => {
  sectionIds.forEach((id) => {
    const section = document.querySelector(`.${id}`);

    if (currPage.id === id) {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });
};

export default switchPage;
