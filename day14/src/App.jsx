import "./App.css";
import MovieCard from "./components/MovieCard";
import MovieList from "./components/MovieList";


function App() {
  return (
    <main className="container">
      <h1>Movie App</h1>
      <MovieList />
    </main>
  );
}

export default App;
