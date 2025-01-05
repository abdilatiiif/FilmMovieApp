import "./css/app.css";
import { useEffect } from "react"; // we want to get the data asap when the app starts
import { FaSearch } from "react-icons/fa";
import MovieCard from "./components/MovieCard";
const API_URL = "http://www.omdbapi.com?apikey=c032e2d7";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [response, setResponse] = useState(true);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setResponse(false);
    console.log(data.Response);
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("sniper");
  }, []);

  console.log(movies.length);

  return (
    <main className="container mx-auto h-screen px-5 py-8 m-0 bg-stone-700">
      <h1 className="text-4xl font-bold text-center mb-8 text-cyan-50 ">
        MovieLando
      </h1>
      <div className="max-w-md mx-auto mb-8 flex items-center">
        <input
          type="search"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          className="search-input  h-22 px-3 rounded-full border-2 border-gray-400"
        />
        <FaSearch
          className="w-16 h-12 ml-3"
          onClick={() => {
            console.log(searchTerm);

            searchMovies(searchTerm);
          }}
        />
      </div>

      {movies.length > 0 && (
        <div className="container movie-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </div>
      )}

      {response === false && (
        <div>
          <h2>No movies found</h2>
        </div>
      )}
    </main>
  );
}

export default App;
