import { useEffect } from "react";
import {
  setError,
  setLoader,
  setMovies,
  setTotalResult,
} from "../redux/slices/moviesSlice";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../components/ui/Loader";

function useFetchMovies() {
  const dispatch = useDispatch();
  const { query } = useSelector((state) => state.moviesSlice);
  const { apiKey } = useSelector((state) => state.uiSlice);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchMovie() {
      try {
        dispatch(setError(""));
        dispatch(setLoader(true));
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`,
          { signal: controller.signal }
        );
        if (!response.ok) {
          throw new Error("Failed To Fetch");
        }

        const data = await response.json();

        const moviesWithImages = data.results.filter(
          (movie) => movie.backdrop_path !== null && movie.poster_path !== null
        );

        dispatch(setTotalResult(moviesWithImages.length));
        dispatch(setMovies(moviesWithImages));
      } catch (error) {
        if (error.name === "AbortError") {
        } else {
          dispatch(setError("Check Your Internet Connection..."));
        }
      } finally {
        dispatch(setLoader(false));
      }
    }

    if (query.length < 1) {
      dispatch(setMovies([]));
      dispatch(setError(""));
      dispatch(setTotalResult(0));

      return;
    }

    fetchMovie();

    return () => controller.abort();
  }, [query, dispatch, apiKey]);
}

export default useFetchMovies;
