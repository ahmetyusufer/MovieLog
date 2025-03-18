import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setLoader, setCurrentMovieDetails } from "../redux/slices/moviesSlice";
import { useSelector } from "react-redux";

function useFetchMovieDetails() {
  const dispatch = useDispatch();
  const { selectedId, apiKey } = useSelector((state) => state.uiSlice);

  return useEffect(() => {
    async function fetchMovieDetails() {
      dispatch(setLoader(true));
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${selectedId}?api_key=${apiKey}`
      );

      let data = await response.json();

      dispatch(setCurrentMovieDetails(data));

      dispatch(setLoader(false));
    }
    fetchMovieDetails();
  }, [dispatch, apiKey, selectedId]);
}

export default useFetchMovieDetails;
