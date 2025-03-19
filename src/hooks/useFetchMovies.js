import { useEffect } from "react";
import {
  setError,
  setLoader,
  setMovies,
  setTotalResult,
} from "../redux/slices/moviesSlice";
import { useSelector, useDispatch } from "react-redux";

function useFetchMovies() {
  const dispatch = useDispatch();
  const { query } = useSelector((state) => state.moviesSlice);
  const { apiKey } = useSelector((state) => state.uiSlice);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchMovie() {
      try {
        dispatch(setError(""));
        dispatch(setLoader({ movie: true }));
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`,
          { signal: controller.signal }
        );
        if (!response.ok) {
          throw new Error("Failed To Fetch");
        }

        const data = await response.json();

        const moviesData = data.results.filter(
          (movie) =>
            movie.backdrop_path !== null &&
            movie.poster_path !== null &&
            movie.vote_average !== 0 &&
            movie.vote_count !== 0 &&
            movie.popularity > 1
        );
        console.log(moviesData);
        dispatch(setTotalResult(moviesData.length));
        dispatch(setMovies(moviesData));
      } catch (error) {
        if (error.name === "AbortError") {
        } else {
          dispatch(setError("Check Your Internet Connection..."));
        }
      } finally {
        dispatch(setLoader({ movie: false }));
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
