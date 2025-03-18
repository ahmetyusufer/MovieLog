import { useSelector } from "react-redux";

import { useCalculateRuntime } from "../../hooks/useCalculateRuntime";

function Summary() {
  const { watched } = useSelector((state) => state.moviesSlice);

  const { avgImdbRating, avgUserRating, avgRuntime } = useCalculateRuntime();

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>
            {avgImdbRating % 1 === 0
              ? avgImdbRating.toFixed(0)
              : avgImdbRating.toFixed(1)}
          </span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime}</span>
        </p>
      </div>
    </div>
  );
}

export default Summary;
