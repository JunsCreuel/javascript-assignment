// addEventListener와 Event 객체
const recommendBtn = document.querySelector("#recommend-button");
const recommendResult = document.querySelector("#recommend-result");

recommendBtn.addEventListener("click", (event) => {
  console.log(event);
  recommendResult.textContent = "오늘의 추천 영화는 인셉션입니다.";
});

const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const searchResult = document.querySelector("#search-result");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const keyword = searchInput.value;
  searchResult.textContent = `검색한 영화: ${keyword}`;
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const keyword = searchInput.value.trim();

  if (keyword === "") {
    return;
  }

  searchResult.textContent = `검색한 영화: ${keyword}`;
});

const movies = [
  {
    title: "인셉션",
    voteAverage: 8.4,
  },
  {
    title: "인터스텔라",
    voteAverage: 8.7,
  },
  {
    title: "다크 나이트",
    voteAverage: 9.0,
  },
];

movies.forEach((movie) => {
  console.log(`${movie.title}의 평점은 ${movie.voteAverage}점입니다.`);
});

const movieListElement = document.querySelector("#movie-list");

movies.forEach((movie) => {
  const movieItem = document.createElement("li");
  movieItem.textContent = movie.title;
  movieListElement.append(movieItem);
});


const favoriteButton = document.querySelector(".favorite-button");

favoriteButton.addEventListener("click", () => {
  favoriteButton.classList.toggle("active");

  if (favoriteButton.classList.contains("active")) {
    favoriteButton.textContent = "❤️ 찜 완료";
  } else {
    favoriteButton.textContent = "🤍 찜";
  }
});