const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1';
const IMG_URL = 'https://image.tmdb.org/t/p/w1280';

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
  'https://api.themoviedb.org/3/discover/movie?with_genres=99&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1';

const popularMovies = document.getElementById('popular');
const actionMovies = document.getElementById('action');
const kidsMovies = document.getElementById('kids');
const romanceMovies = document.getElementById('romance');
const dramaMovies = document.getElementById('drama');
const crimeMovies = document.getElementById('crime');
const thrillerMovies = document.getElementById('thriller');

const form = document.getElementById('form-home');
const search = document.getElementById('search');

getMovie(API_URL);
// getActionMovie(action_URL);
// URLs = { crime_URL, action_URL, romance_URL };

async function getMovie(url) {
  const res = await fetch(url);
  const data = await res.json();
  //   console.log(data.results);

  showMovies(data.results);
}

function showMovies(movies) {
  movies.forEach((movie) => {
    const { title, poster_path, overview, backdrop_path, vote_average } = movie;
    // console.log(IMG_URL + poster_path);

    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');
    movieEl.innerHTML = `
    <div class="movie-card">
    <img src="${IMG_URL + poster_path}" alt="" srcset="" />
    </div>
    `;
    popularMovies.appendChild(movieEl);
  });
}

// =====================================
var dataVar = {};
const movieSectionMain = document.getElementById('movieApi');
getMovieG(Action);
getMovieG(Romance);
getMovieG(Thriller);
getMovieG(Kids);
getMovieG(Crime);
getMovieG(Documentary);

async function getMovieG(url) {
  const res = await fetch(url);
  const data = await res.json();
  //   console.log(data.results);
  dataVar = data.results;
  if (url === Romance) {
    var genreName = 'Romance';
  } else if (url === Action) {
    var genreName = 'Action';
  } else if (url === Drama) {
    var genreName = 'Drama';
  } else if (url === Thriller) {
    var genreName = 'Thriller';
  } else if (url === Documentary) {
    var genreName = 'Documentary';
  } else if (url === Kids) {
    var genreName = 'Kids';
  } else if (url === Crime) {
    var genreName = 'Crime';
  }
  showMoviesGenre(dataVar, genreName);
}

// function getMovieGenre(url, genre) {
//   getMovieG(url);
//   async function getMovieG(url) {
//     const res = await fetch(url);
//     const data = await res.json();
//     dataVar = data.results;
//     console.log(dataVar);
//   }
//   //   console.log('genre:', genre);

//   console.log(dataVar, genre);
//   showMoviesGenre(data, genre);
// }

function showMoviesGenre(movies, genret) {
  //   console.log();
  console.log('hello');
  console.log(movies);
  console.log(genret);

  const movieSec = document.createElement('div');
  console.log(movieSec);
  movieSec.classList.add('movies-genre');
  console.log(movieSec);

  const movieList = document.createElement('div');
  movieList.classList.add('movie-list');
  movieList.classList.add('container');
  console.log(movieList);

  const genreTitle = document.createElement('h2');
  console.log(genreTitle);
  genreTitle.innerHTML = `${genret}`;
  console.log(genreTitle);
  movieList.appendChild(genreTitle);
  console.log(movieList);
  const movieCards = document.createElement('div');
  movieCards.classList.add('movie-cards');

  movies.forEach((movie) => {
    const { title, poster_path, overview, backdrop_path, vote_average } = movie;
    console.log(IMG_URL + poster_path);

    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');
    movieEl.innerHTML = `
      <div class="movie-card">
      <img src="${IMG_URL + poster_path}" alt="" srcset="" />
      </div>
      `;
    movieCards.appendChild(movieEl);
  });
  movieList.appendChild(movieCards);
  movieSec.appendChild(movieList);
  movieSectionMain.appendChild(movieSec);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  console.log(search.value);

  const searchItem = search.value;

  if (searchItem && searchItem != '') {
    getMovie(SEARCH_URL + searchItem);

    search.value = '';
  } else {
    window.location.reload();
  }
});
