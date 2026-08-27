// addEventListener와 Event 객체
const recommendBtn = document.querySelector("#recommend-button");
const recommendResult = document.querySelector("#recommend-result");

recommendBtn.addEventListener("click", (event) => {
  console.log(event);
  recommendResult.textContent = "오늘의 추천 영화는 인셉션입니다.";
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