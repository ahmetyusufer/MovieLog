import { useState, useEffect } from "react";

export function useFetchIMDBRating(imdbID) {
  const [realImdb, setRealImdb] = useState(null);

  useEffect(() => {
    if (!imdbID) return;

    const fetchRating = async () => {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?i=${imdbID}&apikey=efe41af1`
        );
        const data = await response.json();
        if (data.imdbRating) {
          setRealImdb(data.imdbRating);
        }
      } catch (error) {
        console.error("IMDB rating fetch error:", error);
      }
    };

    fetchRating();
  }, [imdbID]);

  return realImdb;
}
