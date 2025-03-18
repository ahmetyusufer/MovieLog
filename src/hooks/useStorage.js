import { useEffect } from "react";
import { useSelector } from "react-redux";

function useStorage() {
  const watched = useSelector((state) => state.moviesSlice.watched);

  useEffect(() => {
    if (watched) {
      localStorage.setItem("watched", JSON.stringify(watched));
    }
  }, [watched]);
}

export default useStorage;
