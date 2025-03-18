import { useSelector } from "react-redux";

function NumResults() {
  const { totalResult } = useSelector((state) => state.moviesSlice);
  return (
    <p className="num-results">
      Found <strong>{totalResult}</strong> results
    </p>
  );
}

export default NumResults;
