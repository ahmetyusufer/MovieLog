import { useEffect } from "react";
import { useSelector } from "react-redux";

function useTitleUpdate() {
  const { currentMovieDetails } = useSelector((state) => state.moviesSlice);

  return useEffect(() => {
    if (currentMovieDetails) {
      document.title = "Movie | " + currentMovieDetails.Title;
    }

    return function () {
      document.title = "usePopcorn";
    };
  }, [currentMovieDetails]);
}

export default useTitleUpdate;
