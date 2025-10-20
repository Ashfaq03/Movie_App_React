import "../css/Favorites.css";
import { useMovieContext } from "../context/MovieContext";
import Moviecard from "../components/MovieCard";

export default function Favorites() {
  const { favorites } = useMovieContext();
  // console.log(favorites);
  

  if (favorites.length > 0) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <Moviecard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="favorites-empty">
        <h2>No favorites movies yet</h2>
        <p>Add movies to your favorites and they will appear here</p>
      </div>
    );
  }
}
