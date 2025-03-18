import MovieDetails from "./MovieDetails";
import Summary from "../summary/Summary";
import WatchedMovieList from "./WatchedMovieList";

import { useSelector } from "react-redux";

export function WatchedSection() {
  const { isOpen } = useSelector((state) => state.uiSlice);

  return isOpen ? (
    <>
      <Summary />
      <WatchedMovieList />
    </>
  ) : (
    <MovieDetails />
  );
}

export default WatchedSection;
