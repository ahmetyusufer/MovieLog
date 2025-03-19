import { useEffect } from "react";
import { useSelector } from "react-redux";

function useTitleUpdate() {
  const { currentMovieDetails } = useSelector((state) => state.moviesSlice);

  return useEffect(() => {
    if (currentMovieDetails) {
      document.title = "Movie | " + currentMovieDetails.title;
    }

    return function () {
      document.title = "MovieLog";
    };
  }, [currentMovieDetails]);
}

export default useTitleUpdate;
