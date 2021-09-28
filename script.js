const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1';
const IMG_URL = 'https://image.tmdb.org/t/p/w1280 ';

const SEARCH_URL =
  'https://api.themoviedb.org/3/search/movie?api_key=9c9a236c211df46e640b24f29796b6c0&query=';

const highRatedURL =
  'https://api.themoviedb.org/3/discover/movie/?certification_country=US&certification=R&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1';

const kids_URL =
  'https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1';

const bestDrama_URL =
  'https://api.themoviedb.org/3/discover/movie?with_genres=18&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1';

const action_URL =
  'https://api.themoviedb.org/3/discover/movie?with_genres=28&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1';

const crime_URL =
  'https://api.themoviedb.org/3/discover/movie?with_genres=80&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1';

const thriller_URL =
  'https://api.themoviedb.org/3/discover/movie?with_genres=53&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1';
const romance_URL =
  'https://api.themoviedb.org/3/discover/movie?with_genres=10749&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1';
const doc_URL =
  'https://api.themoviedb.org/3/discover/movie?with_genres=99&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1';

getMovie(API_URL);

const form = document.getElementById('form-home');
const search = document.getElementById('search');
async function getMovie(url) {
  const res = await fetch(url);
  const data = await res.json();

  console.log(data.results);
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
