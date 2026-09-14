
// TODO 01: MovieCard 컴포넌트를 정의하고 { movie } Props를 받아 화면에 출력하세요.
// function MovieCard({ movie }) { ... }\
function MovieCard({ movie }) {
  return (
    <article className="movie-card">
      <img src={movie.poster} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>평점: {movie.rating}</p>
    </article>
  );
}

export default MovieCard;