import { useSelector, useDispatch } from "react-redux";

import { setWatched } from "../../redux/slices/moviesSlice";
import { setIsOpen, setStarClickedNumber } from "../../redux/slices/uiSlice";

import { useFetchIMDBRating } from "../../hooks/useFetchIMDBRating";

import AlreadyAddedMessage from "../ui/AlreadyAddedMessage";

function AddToListButton() {
  const dispatch = useDispatch();
  const { watched, currentMovieDetails } = useSelector(
    (state) => state.moviesSlice
  );
  const { starClickedNumber } = useSelector((state) => state.uiSlice);

  const imdbRating = useFetchIMDBRating(currentMovieDetails?.imdb_id);

  function handleAddToWatched() {
    const newMovie = {
      ...currentMovieDetails,
      userRating: starClickedNumber,
      realImdb: imdbRating,
    };

    dispatch(setWatched([...watched, newMovie]));
    dispatch(setIsOpen(true));
    dispatch(setStarClickedNumber(0));
    console.log(newMovie);
  }

  if (
    watched.some(
      (watchedMovie) => watchedMovie.imdb_id === currentMovieDetails.imdb_id
    )
  )
    return <AlreadyAddedMessage></AlreadyAddedMessage>;

  if (starClickedNumber)
    return (
      <button className="btn-add" onClick={() => handleAddToWatched()}>
        +Add to List
      </button>
    );
}

export default AddToListButton;
