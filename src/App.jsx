import "./css/app.css";
import { useEffect } from "react"; // we want to get the data asap when the app starts
import { FaSearch } from "react-icons/fa";
import MovieCard from "./components/MovieCard";
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=48fbb5a9";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [response, setResponse] = useState(null);

  const searchMovies = async (title) => {
    try {
      const response = await fetch(`${API_URL}&s=${title}`);

      const data = await response.json();

      if (data.Response === "False") {
        setResponse("False");
        throw new Error(data.Error);
      } else {
        setResponse("True");
      }

      setMovies(data.Search);
    } catch (error) {
      console.log(error);

      movies([]);
    }
  };

  useEffect(() => {
    searchMovies("sniper");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            searchMovies(searchTerm);
          }}
        />
      </div>

      {response === "True" ? (
        <div className="container movie-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </div>
      ) : (
        <div>
          <h2>No movies found</h2>
        </div>
      )}
    </main>
  );
}

export default App;
