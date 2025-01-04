import "./css/app.css";
import { useEffect } from "react"; // we want to get the data asap when the app starts
import {
  FaPlay,
  FaHeart,
  FaComment,
  FaDownload,
  FaSearch,
} from "react-icons/fa";
const API_URL = "http://www.omdbapi.com?apikey=c032e2d7";

function App() {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("sherlock");
  }, []);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">MovieLando</h1>
      <div className="max-w-md mx-auto mb-8">
        <input
          type="search"
          placeholder="Search movies..."
          value="superman"
          onChange={() => {}}
          className="w-full"
        />
      </div>
      <FaSearch onClick={() => {}} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"></div>
    </main>
  );
}

export default App;
