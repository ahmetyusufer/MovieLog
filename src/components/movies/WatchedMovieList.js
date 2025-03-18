import { useSelector } from "react-redux";

import WatchedMovieItem from "./WatchedMovieItem";

function WatchedMovieList() {
  const { watched } = useSelector((state) => state.moviesSlice);

  return (
    <ul className="list">
      {watched.map((watchedMovie, index) => (
        <WatchedMovieItem key={index} watchedMovie={watchedMovie} />
      ))}
    </ul>
  );
}

export default WatchedMovieList;
