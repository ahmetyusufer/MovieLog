import { useSelector } from "react-redux";

function MovieDetailsContent() {
  const { currentMovieDetails } = useSelector((state) => state.moviesSlice);
  return (
    <>
      <p>
        <em>{currentMovieDetails.overview}</em>
      </p>
      <p>Starring {currentMovieDetails.Actors} </p>
      <p>Directed by {currentMovieDetails.Director} </p>
    </>
  );
}

export default MovieDetailsContent;
