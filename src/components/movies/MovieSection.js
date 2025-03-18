import Loader from "../ui/Loader";
import HandleError from "../ui/HandleError";
import MovieList from "./MovieList";

import { useSelector } from "react-redux";

export function MovieSection() {
  const { loader, error } = useSelector((state) => state.moviesSlice);

  if (error) return <HandleError />;
  if (loader) return <Loader />;
  return <MovieList />;
}

export default MovieSection;
