import { setIsOpen } from "../../redux/slices/uiSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  converMinuteToHours,
  convertToSpace,
  convertToSplitGenres,
} from "../../helpers/converts";
import { useFetchIMDBRating } from "../../hooks/useFetchIMDBRating";

function MovieDetailsHeader() {
  const { currentMovieDetails } = useSelector((state) => state.moviesSlice);
  const dispatch = useDispatch();

  const imdbRating = useFetchIMDBRating(currentMovieDetails.imdb_id);

  if (!currentMovieDetails) {
    return <div>Loading...</div>;
  }
  return (
    <header className="movie-details-header">
      <button className="btn-back" onClick={() => dispatch(setIsOpen(true))}>
        &larr;
      </button>
      <img
        src={`https://image.tmdb.org/t/p/w500${currentMovieDetails.poster_path}`}
        alt={currentMovieDetails.title}
        className="movie-poster"
      />
      <div className="details-overview">
        <h2>{currentMovieDetails.title}</h2>
        <p>
          {convertToSpace(currentMovieDetails.release_date)}
          <span>🍿</span>
          {converMinuteToHours(currentMovieDetails.runtime)}
        </p>
        <p>{convertToSplitGenres(currentMovieDetails.genres)}</p>
        <p>
          <span>⭐</span>
          {imdbRating === null
            ? "Loading..."
            : imdbRating !== "N/A"
            ? `IMDB Rating: ${imdbRating}`
            : currentMovieDetails.vote_average}
        </p>
      </div>
    </header>
  );
}

export default MovieDetailsHeader;
