/* eslint-disable react/prop-types */
import "../css/app.css";
import { FaPlay, FaHeart, FaComment, FaDownload } from "react-icons/fa";

function MovieCard(props) {
  return (
    <div className="movie-card">
      <img
        src={
          props.movie.Poster !== "N/A"
            ? props.movie.Poster
            : "https://placehold.co/450"
        }
        alt={props.movie.Title}
        className="movie-image"
      />
      <div className="movie-info">
        <h2>{props.movie.Title}</h2>
        <p>{props.movie.Year}</p>
        <h5>{props.movie.Type}</h5>
        <div className="movie-actions flex justify-between">
          <button aria-label="Play">
            <FaPlay />
          </button>
          <button aria-label="Like">
            <FaHeart />
          </button>
          <button aria-label="Comment">
            <FaComment />
          </button>
          <button aria-label="Download">
            <FaDownload />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
