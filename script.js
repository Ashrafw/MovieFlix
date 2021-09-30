const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1';
const IMG_URL = 'https://image.tmdb.org/t/p/w1280';
const IMG_URL_Poster = 'https://image.tmdb.org/t/p/w1280';

const SEARCH_URL =
  'https://api.themoviedb.org/3/search/movie?api_key=9c9a236c211df46e640b24f29796b6c0&query=';
const highRatedURL =
  'https://api.themoviedb.org/3/discover/movie/?certification_country=US&certification=R&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1';
const Kids =
  'https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1';
const Drama =
  'https://api.themoviedb.org/3/discover/movie?with_genres=18&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1';
const Action =
  'https://api.themoviedb.org/3/discover/movie?with_genres=28&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1';
const Crime =
  'https://api.themoviedb.org/3/discover/movie?with_genres=80&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1';
const Thriller =
  'https://api.themoviedb.org/3/discover/movie?with_genres=53&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1';
const Romance =
  'https://api.themoviedb.org/3/discover/movie?with_genres=10749&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1';
const Documentary =
  'https://api.themoviedb.org/3/discover/movie?with_genres=99&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=3';
const Popular =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1';

const popularMovies = document.getElementById('popular');

const landingBg = document.getElementById('landing');

const form = document.getElementById('form-home');
const search = document.getElementById('search');
const imageL = document.getElementById('image');
const overviewL = document.getElementById('overview');
const titleL = document.getElementById('titleH1');
const rateL = document.getElementById('rating');

getMovie(API_URL);
// getActionMovie(action_URL);
// URLs = { crime_URL, action_URL, romance_URL };

async function getMovie(url) {
  const res = await fetch(url);
  const data = await res.json();
  //   console.log(data.results);

  showMovies(data.results);
}

getRandomInt(1, 19);
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  //   console.log(Math.floor(Math.random() * (max - min + 1)) + min);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showMovies(movies) {
  //   console.log('hello');

  //   console.log(movies[1].backdrop_path);
  //   console.log('hello');
  var movieNum = getRandomInt(0, 19);
  var movieTitle = movies[movieNum].title;
  var movieBackDrop = movies[movieNum].backdrop_path;
  var movieRating = movies[movieNum].vote_average;
  var movieOverview = movies[movieNum].overview;
  var moviePoster = movies[movieNum].poster_path;

  landingBg.style.backgroundImage = `url('${IMG_URL + movieBackDrop}')`;
  imageL.innerHTML = `<img src="${
    IMG_URL_Poster + moviePoster
  }" alt="" srcset="" />`;
  overviewL.innerHTML = `${movieOverview}`;
  titleL.innerHTML = `${movieTitle}`;
  rateL.innerHTML = `${movieRating}`;
}

// =====================================
var dataVar = {};
// const movieSectionMain = document.getElementById('movieApi');
// getMovieG(Romance);
const actionBtn = document.getElementById('action');
const thrillerBtn = document.getElementById('thriller');
const crimeBtn = document.getElementById('crime');
const popularBtn = document.getElementById('popular');
const romanceBtn = document.getElementById('romance');
const kidsBtn = document.getElementById('kids');
const docBtn = document.getElementById('documentary');
let idNum = 0;
const movieSectionMain = document.getElementById('movieApi');
getMovieG(Action);

function removeActive() {
  actionBtn.classList.remove('active');
  thrillerBtn.classList.remove('active');
  crimeBtn.classList.remove('active');
  popularBtn.classList.remove('active');
  romanceBtn.classList.remove('active');
  kidsBtn.classList.remove('active');
  docBtn.classList.remove('active');
  // movieSec.style.opacity = '0';
  movieSec.classList.remove('active');
}
thrillerBtn.addEventListener('click', (e) => {
  movieSectionMain.innerHTML = ``;
  removeActive();
  e.target.classList.add('active');
  getMovieG(Thriller);
});
actionBtn.addEventListener('click', (e) => {
  removeActive();
  e.target.classList.add('active');
  movieSectionMain.innerHTML = ``;
  getMovieG(Action);
});
docBtn.addEventListener('click', (e) => {
  removeActive();
  e.target.classList.add('active');
  movieSectionMain.innerHTML = ``;
  getMovieG(Documentary);
});
romanceBtn.addEventListener('click', (e) => {
  removeActive();
  e.target.classList.add('active');
  // console.log('clikced');
  movieSectionMain.innerHTML = ``;
  getMovieG(Romance);
});
crimeBtn.addEventListener('click', (e) => {
  removeActive();
  e.target.classList.add('active');
  movieSectionMain.innerHTML = ``;
  getMovieG(Crime);
});

kidsBtn.addEventListener('click', (e) => {
  removeActive();
  e.target.classList.add('active');
  movieSectionMain.innerHTML = ``;
  getMovieG(Kids);
});

popularBtn.addEventListener('click', (e) => {
  removeActive();
  e.target.classList.add('active');
  movieSectionMain.innerHTML = ``;
  getMovieG(Popular);
});

async function getMovieG(url) {
  const res = await fetch(url);
  const data = await res.json();
  //   console.log(data.results);
  dataVar = data.results;
  if (url === Romance) {
    var genreName = 'Romance';
    let idNum = 1;
    showMoviesGenre(dataVar, genreName, idNum);
  } else if (url === Action) {
    var genreName = 'Action';
    let idNum = 1;
    showMoviesGenre(dataVar, genreName, idNum);
  } else if (url === Drama) {
    var genreName = 'Drama';
    let idNum = 1;
    showMoviesGenre(dataVar, genreName, idNum);
  } else if (url === Thriller) {
    var genreName = 'Thriller';
    let idNum = 1;
    showMoviesGenre(dataVar, genreName, idNum);
  } else if (url === Documentary) {
    var genreName = 'Documentary';
    let idNum = 1;
    showMoviesGenre(dataVar, genreName, idNum);
  } else if (url === Kids) {
    var genreName = 'Kids';
    let idNum = 1;
    showMoviesGenre(dataVar, genreName, idNum);
  } else if (url === Crime) {
    var genreName = 'Crime';
    let idNum = 1;
    showMoviesGenre(dataVar, genreName, idNum);
  } else if (url === Popular) {
    var genreName = 'Popular';
    let idNum = 1;
    showMoviesGenre(dataVar, genreName, idNum);
  }
}

var movieCards1;
var movieCards4;

var chevLeft;
var chevRight;
var movieSec;
// console.log(chevLeft);
function showMoviesGenre(movies, genret, idNum) {
  //   console.log();
  //   console.log('hello');
  //   console.log(movies);
  //   console.log(genret);

  movieSec = document.createElement('div');
  //   console.log(movieSec);
  movieSec.classList.add('movies-genre');

  movieSec.classList.add('active');
  //   console.log(movieSec);

  const movieList = document.createElement('div');
  movieList.classList.add('movie-list');
  movieList.classList.add('container');
  //   console.log(movieList);

  const genreTitle = document.createElement('h2');
  //   console.log(genreTitle);
  genreTitle.innerHTML = `${genret}`;
  //   console.log(genreTitle);
  movieList.appendChild(genreTitle);
  //   console.log(movieList);
  const movieCards = document.createElement('div');
  movieCards.classList.add('movie-cards');
  movieCards.classList.add(`movie-cards`);
  movieCards.innerHTML = `<button class="chevron-left" id="chevron-left-${idNum}"><i class="fas fa-chevron-left" ></i></button>
  <button class="chevron-right" id="chevron-right-${idNum}"><i class="fas fa-chevron-right "></i></button>
  `;
  const movieCardsConatiner = document.createElement('div');
  movieCardsConatiner.classList.add(`movie-cards-container`);
  movieCardsConatiner.classList.add(`movie-cards-container-${idNum}`);

  movies.forEach((movie) => {
    const {
      title,
      poster_path,
      overview,
      backdrop_path,
      vote_average,
      release_date,
    } = movie;
    // console.log(IMG_URL + poster_path);

    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');
    movieEl.innerHTML = `
      <div class="movie-card">
      <img src="${IMG_URL + poster_path}" alt="" srcset="" />
      </div>
      <div class="info-card">
      <div class="info-card-detail">
      <div class="info-card-detail-it">
        <h5 class="title-card">${title}</h5>
        <p class="rate-card">${vote_average}</p>
        </div>
        <p class="date-card">Release: <span class="rate-card">${release_date}</span></p>
      </div>
      <p class="overview-card">${overview}</p>
        </div>

      `;
    movieCardsConatiner.appendChild(movieEl);
  });
  movieCards.appendChild(movieCardsConatiner);
  movieList.appendChild(movieCards);
  movieSec.appendChild(movieList);
  movieSectionMain.appendChild(movieSec);
  // if (idNum === 1) {
  var movieCards1 = document.querySelector('.movie-cards-container-1');
  // movieSec.style.opacity = '0.8';
  // }
  // if (idNum === 4) {
  //   var movieCards4 = document.querySelector('.movie-cards-container-4');
  // }
  // // setTimeout(actionChevron(movieCards1), 1000);
  setTimeout(Chevron(movieCards1), 1000);
  // setTimeout(function () {
  //   actionChevron(movieCards1);

  //   thrillerChevron(movieCards4);
  // }, 1000);
}

// function eventListenerScroll(){

// }

function Chevron(movieCards1) {
  // var movieCards1 = document.querySelector('.movie-cards-container-1');
  // console.log(movieCards1);
  var chevLeft1 = document.getElementById('chevron-left-1');
  var chevRight1 = document.getElementById('chevron-right-1');
  var clientWidth1 = movieCards1.clientWidth;
  // length if all movie cards
  var movieWidth = 5580;
  // travel lengnth require to translate in px
  var travel = 5580 - clientWidth1;
  //number of travels required to move
  var moveNum = travel / clientWidth1;
  // initalize move
  var move = 0;
  // screen width reduce card plus padding, for new travel interval
  var moveFix = clientWidth1 - 300;
  var move = 0;

  chevRight1.addEventListener('click', () => {
    //  if the remainf distance is less than screen width
    if (move < travel && travel - move < moveFix && travel - move > 300) {
      clientWidth1;
      // console.log(
      //   'if statement: (m move):',
      //   move,
      //   ', travel',
      //   travel,
      //   'travel-move',
      //   travel - move,
      //   'moveFix',
      //   moveFix
      // );
      var n = travel - move;
      move = move + n;
      // moveFix = move + n;
      // console.log('if statement: (m move):', move, ', n', n);
      movieCards1.style.transform = `translate(-${move}px)`;
    } else if (move < travel && travel - move > moveFix) {
      // console.log(
      //   'elseif statement: (m move):',
      //   move,
      //   ', travel',
      //   travel,
      //   ' travel-move',
      //   travel - move,
      //   'moveFix',
      //   moveFix
      // );
      move = move + moveFix;
      movieCards1.style.transform = `translate(-${move}px)`;

      // console.log('elseif statement:--  (move):', move);
    }

    // console.log('clicked');
  });
  chevLeft1.addEventListener('click', () => {
    if (move > 0) {
      // console.log('move:', move)

      // console.log(
      //   'move:',
      //   move,
      //   'moveFix',
      //   moveFix,
      //   'movie-moveFix',
      //   move - moveFix
      // );

      move = move - moveFix;
      movieCards1.style.transform = `translate(-${move}px)`;
    }
    moveFix = clientWidth1 - 300;
    // console.log('clicked');
  });
}
function thrillerChevron(movieCards) {
  // var movieCards1 = document.querySelector('.movie-cards-container-1');
  // console.log(movieCards);
  var chevLeft = document.getElementById('chevron-left-4');
  var chevRight = document.getElementById('chevron-right-4');
  var clientWidth1 = movieCards.clientWidth;
  // length if all movie cards
  var movieWidth = 5580;
  // travel lengnth require to translate in px
  var travel = 5580 - clientWidth1;
  //number of travels required to move
  var moveNum = travel / clientWidth1;
  // initalize move
  var move = 0;
  // screen width reduce card plus padding, for new travel interval
  var moveFix = clientWidth1 - 300;
  var move = 0;

  chevRight.addEventListener('click', () => {
    //  if the remainf distance is less than screen width
    if (move < travel && travel - move < moveFix && travel - move > 300) {
      clientWidth1;
      // console.log(
      //   'if statement: (m move):',
      //   move,
      //   ', travel',
      //   travel,
      //   'travel-move',
      //   travel - move,
      //   'moveFix',
      //   moveFix
      // );
      var n = travel - move;
      move = move + n;
      // moveFix = move + n;
      // console.log('if statement: (m move):', move, ', n', n);
      movieCards.style.transform = `translate(-${move}px)`;
    } else if (move < travel && travel - move > moveFix) {
      // console.log(
      //   'elseif statement: (m move):',
      //   move,
      //   ', travel',
      //   travel,
      //   ' travel-move',
      //   travel - move,
      //   'moveFix',
      //   moveFix
      // );
      move = move + moveFix;
      movieCards.style.transform = `translate(-${move}px)`;

      // console.log('elseif statement:--  (move):', move);
    }

    console.log('clicked');
  });
  chevLeft.addEventListener('click', () => {
    if (move > 0) {
      // console.log('move:', move)

      // console.log(
      //   'move:',
      //   move,
      //   'moveFix',
      //   moveFix,
      //   'movie-moveFix',
      //   move - moveFix
      // );

      move = move - moveFix;
      movieCards.style.transform = `translate(-${move}px)`;
    }
    moveFix = clientWidth1 - 300;
    // console.log('clicked');
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // console.log(search.value);

  const searchItem = search.value;

  if (searchItem && searchItem != '') {
    getMovie(SEARCH_URL + searchItem);

    search.value = '';
  } else {
    window.location.reload();
  }
});
