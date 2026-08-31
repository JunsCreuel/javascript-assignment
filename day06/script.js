//2
const movie = {
  id: 101,
  title: "Inception",
  voteAverage: 8.4,
  isAdult: false,
};
console.log(movie);

//3
const movieJson = JSON.stringify(movie);

console.log(movieJson);
console.log(typeof movieJson);

//4
const parsedMovie = JSON.parse(movieJson);

console.log(parsedMovie);
console.log(typeof parsedMovie);