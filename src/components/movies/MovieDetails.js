import { useSelector } from "react-redux";

import Loader from "../ui/Loader";
import useEscapeKey from "../../hooks/useEscapeKey";
import MovieDetailsHeader from "./MovieDetailsHeader";
import MovieDetailsContent from "./MovieDetailsContent";
import useFetchMovieDetails from "../../hooks/useFetchMovieDetails";
import useTitleUpdate from "../../hooks/useTitleUpdate";
import StarRating from "./StarRating";
import AddToListButton from "./AddToListButton";

function MovieDetails() {
  const { loader } = useSelector((state) => state.moviesSlice);

  useTitleUpdate();
  useFetchMovieDetails();
  useEscapeKey();

  return (
    <div className="details">
      {loader.movieDetails ? (
        <Loader></Loader>
      ) : (
        <>
          <MovieDetailsHeader />
          <section>
            <StarRating />
            <MovieDetailsContent />
            <AddToListButton />
          </section>
        </>
      )}
    </div>
  );
}
export default MovieDetails;
