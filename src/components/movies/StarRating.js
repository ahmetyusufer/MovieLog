import { useSelector } from "react-redux";
import Star from "../star/Star";

function StarRating() {
  const { watched, currentMovieDetails } = useSelector(
    (state) => state.moviesSlice
  );
  if (
    !watched.some(
      (watchedMovie) => watchedMovie.imdb_id === currentMovieDetails.imdb_id
    )
  ) {
    return <Star />;
  }
}

export default StarRating;
