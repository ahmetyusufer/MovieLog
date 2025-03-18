import { useSelector, useDispatch } from "react-redux";

import { setIsOpen } from "../redux/slices/uiSlice";
import { setWatched } from "../redux/slices/moviesSlice";

function useCloseMovie({ watchedMovie }) {
  const dispatch = useDispatch();
  const { watched } = useSelector((state) => state.moviesSlice);

  return function handleClick() {
    dispatch(setIsOpen(true));
    dispatch(
      setWatched(
        watched.filter((item) => item.imdb_id !== watchedMovie.imdb_id)
      )
    );
  };
}

export default useCloseMovie;
