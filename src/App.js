import NavBar from "./components/ui/Navbar";
import Box from "./components/ui/Box";
import WatchedSection from "./components/movies/WatchedSection";
import MovieSection from "./components/movies/MovieSection";

import useFetchMovies from "./hooks/useFetchMovies";
import useStorage from "./hooks/useStorage";

export default function App() {
  useFetchMovies();
  useStorage();

  return (
    <>
      <NavBar />
      <main className="main">
        <Box>
          <MovieSection />
        </Box>

        <Box>
          <WatchedSection />
        </Box>
      </main>
    </>
  );
}
