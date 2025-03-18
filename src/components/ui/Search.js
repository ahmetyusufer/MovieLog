import { useSelector, useDispatch } from "react-redux";

import { setQuery } from "../../redux/slices/moviesSlice";
import { useFocus } from "../../hooks/useFocus";

function Search() {
  const inputRef = useFocus();

  const dispatch = useDispatch();
  const { query } = useSelector((state) => state.moviesSlice);

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => dispatch(setQuery(e.target.value))}
      ref={inputRef}
    />
  );
}

export default Search;
