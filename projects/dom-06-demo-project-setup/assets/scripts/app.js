// good performance
const movieModal = document.getElementById('add-modal');
const addMovieBtn = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelModalBtn = movieModal.querySelector('.btn--passive');
const submitModalBtn = movieModal.querySelector('.btn--success');
const userInputs = movieModal.querySelectorAll('input');
const entryText = document.getElementById('entry-text');

const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entryText.style.display = 'block';
  } else {
    entryText.style.display = 'none';
  }
}

const renderNewMovie = (title, imageUrl, rating) => {
  const listRoot = document.getElementById('movie-list');
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
  <div className="movie-element__image">
    <img src="${imageUrl}" alt="${title}">
  </div>
  <div className="movie-element__info">
    <h2>${title}</h2>
    <p>${rating}/5 stars</p>
  </div>
  `;

  listRoot.append(newMovieElement);
}

const toggleModal = () => {
  // 1. make modal visible
  movieModal.classList.toggle('visible');
  toggleBackdrop();
};

const toggleBackdrop = () => {
  // 2. set backdrop effect to darken the background
  backdrop.classList.toggle('visible');
};

const clearMovieInputs = () => {
  userInputs.forEach(el => el.value = '');
}

const processMovieInputs = () => {
  const title = userInputs[0].value;
  const imageUrl = userInputs[1].value;
  const rating = userInputs[2].value;

  if (
    title.trim() === '' || 
    imageUrl.trim() === '' || 
    rating.trim() === '' ||
    +rating < 1 ||
    +rating > 5
    ) {
      alert('Please enter valid values (rating between 1 and 5.)');
  }

  const newMovie = {
    title,
    imageUrl,
    rating,
  };

  movies.push(newMovie);
  toggleModal();
  clearMovieInputs();
  renderNewMovie(newMovie.title, newMovie.imageUrl, newMovie.rating);
  updateUI();
};

backdrop.addEventListener('click', toggleModal);
addMovieBtn.addEventListener('click', toggleModal);
cancelModalBtn.addEventListener('click', toggleModal);
submitModalBtn.addEventListener('click', processMovieInputs);