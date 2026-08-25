const getMovieMessage = (title, voteAverage) => {
  return `${title}의 평점은 ${voteAverage}점입니다.`;
};

const message = getMovieMessage("인셉션", 8.4);
console.log(message);

const titlePage = document.querySelector(".title");
titlePage.textContent = "오늘의 추천 영화";

const descriptionPage = document.querySelector(".description");
descriptionPage.classList.add("text-primary", "fw-bold");

const movieList = document.querySelector("#movie-list");

const movieDiv = document.createElement("div");
movieDiv.textContent = message;
movieDiv.classList.add("border","rounded","p-3","mb-2");
movieList.append(movieDiv);

const secondMessage = getMovieMessage("인터스텔라", 8.7);

secondMovieDiv = document.createElement("div");
secondMovieDiv.textContent = secondMessage;
secondMovieDiv.classList.add("border","rounded","p-3","mb-2");

movieList.append(secondMovieDiv);

// secondMovieDiv.remove();