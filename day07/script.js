const movie = {
  id: 550,
  title: "Fight Club",
  vote_average: 8.4,
  vote_count: 0,
  detail: {
    runtime: 139,
  },
};
const genres = ["Drama", "Thriller", "Crime"];

//1 
const { title, vote_average } = movie;

console.log(`제목: ${title}`);
console.log(`평점: ${vote_average}`);

//2
const { title: movieTitle } = movie;
console.log(movieTitle);

//3
const [firstGenre, secondGenre] = genres;
console.log(firstGenre);
console.log(secondGenre);

//4
const director = movie.detail?.director;
console.log(director);

//5
const directorName = director ?? "감독 정보 없음";
console.log(directorName);

//6
const { vote_count } = movie;
console.log(vote_count || 100);
console.log(vote_count ?? 100);