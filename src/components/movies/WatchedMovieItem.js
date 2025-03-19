import { useDispatch } from "react-redux";

import { setSelectedId, setIsOpen } from "../../redux/slices/uiSlice";
import useCloseMovie from "../../hooks/useCloseMovie";
import { converMinuteToHours } from "../../helpers/converts";

function WatchedMovieItem({ watchedMovie }) {
  const dispatch = useDispatch();
  const handleCloseMovie = useCloseMovie({ watchedMovie });

  return (
    <div className="li-relative">
      <li
        key={watchedMovie.imdbID}
        onClick={() => {
          dispatch(setSelectedId(watchedMovie.imdb_id));
          dispatch(setIsOpen(false));
        }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${watchedMovie.poster_path}`}
          alt={`${watchedMovie.title} poster`}
        />
        <div>
          <h3>{watchedMovie.title}</h3>
          <div className="watchedSubElements">
            <p>
              <span>IMDB: ⭐️</span>
              <span>{parseFloat(watchedMovie.realImdb).toFixed(1)}</span>
            </p>
            <p>
              <span>👏</span>
              <span>{watchedMovie.userRating.toFixed(0)}</span>
            </p>
            <p>
              <span>⏳</span>
              <span>
                {watchedMovie.Runtime === "N/A"
                  ? "saat bulunamadı"
                  : converMinuteToHours(watchedMovie.runtime)}
              </span>
            </p>
          </div>
        </div>
      </li>

      <p>
        <button className="btn-delete" onClick={handleCloseMovie}>
          x
        </button>
      </p>
    </div>
  );
}

export default WatchedMovieItem;
