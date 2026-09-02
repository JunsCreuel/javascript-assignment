// 실습 3) 진짜 응답의 구조 탐색하기
const options = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
};

const URL = "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1";

const container = document.querySelector('#movie-list');

function createMovieCard(movie) {
  const {title, vote_average, poster_path} = movie;

  const card = document.createElement('div');
  card.className = 'movie-card';

  const posterEl = document.createElement("img")

  posterEl.src = poster_path
  ? `https://image.tmdb.org/t/p/w500${poster_path}`
  : 'https://placehold.co/500x750?text=No+Image';

  posterEl.alt = `${title} 포스터`;

  const titleEl = document.createElement('h3');
  titleEl.textContent = title;

  const voteEl = document.createElement("p");
  voteEl.textContent = `평점 ${vote_average}`;

  card.append(posterEl, titleEl, voteEl);

  return card;
}

function renderMovies(movies) {
  movies.forEach((movie) => {
    container.append(createMovieCard(movie));
  });
}


async function getTopRatedMovies() {
  container.textContent = "평점 높은 영화 목록을 불러오는 중...";

  const response = await fetch(URL,options);
  const data = await response.json();

  container.textContent = "";

  renderMovies(data.results);
}

getTopRatedMovies();
