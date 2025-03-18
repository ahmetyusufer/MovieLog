import { useSelector } from "react-redux";
import { converMinuteToHours } from "../helpers/converts";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const sum = (arr) =>
  arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

export function useCalculateRuntime() {
  const { watched } = useSelector((state) => state.moviesSlice);

  const avgImdbRating = average(watched.map((movie) => movie.realImdb));
  const avgUserRating = average(
    watched.map((movie) => movie.userRating || 0)
  ).toFixed(0);

  const avgRuntime = sum(
    watched.map((movie) =>
      !movie.runtime || movie.runtime === "N/A" ? 0 : parseInt(movie.runtime)
    )
  );
  console.log(avgRuntime);

  return {
    avgImdbRating,
    avgUserRating,
    avgRuntime: converMinuteToHours(avgRuntime),
  };
}
