import { useSelector, useDispatch } from "react-redux";

import { setIsOpen, setSelectedId } from "../../redux/slices/uiSlice";
import { convertToSpace } from "../../helpers/converts";

function MovieList() {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.moviesSlice);

  return (
    <ul className="list">
      {movies?.map((movie) => (
        <li
          key={movie.id}
          onClick={() => {
            dispatch(setSelectedId(movie.id));
            dispatch(setIsOpen(false));
          }}
        >
          <div className="image-container">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={`${movie.title} poster`}
            />
          </div>
          <div className="movie-article">
            <h3>{movie.title}</h3>
            <div>
              <p>
                <span>🗓</span>
                <span>{convertToSpace(movie.release_date)}</span>
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default MovieList;
