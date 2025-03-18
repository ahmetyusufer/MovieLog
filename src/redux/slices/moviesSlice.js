import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: "moviesSlice",
  initialState: {
    query: "",
    movies: [],
    currentMovieDetails: [],
    loader: false,
    error: "",
    watched: JSON.parse(localStorage.getItem("watched")) || [],
    totalResult: "",
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
      state.page = 1; // Yeni arama yapıldığında sayfayı sıfırla
    },
    setMovies: (state, action) => {
      state.movies = action.payload;
      state.totalPages = action.payload.totalPages;
    },
    setCurrentMovieDetails: (state, action) => {
      state.currentMovieDetails = action.payload;
    },
    setLoader: (state, action) => {
      state.loader = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setWatched: (state, action) => {
      state.watched = action.payload;
      localStorage.setItem("watched", JSON.stringify(action.payload));
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setTotalResult: (state, action) => {
      state.totalResult = action.payload;
    },
  },
});

export const {
  setQuery,
  setMovies,
  setCurrentMovieDetails,
  setLoader,
  setError,
  setWatched,
  setPage,
  setTotalResult,
} = moviesSlice.actions;

export default moviesSlice.reducer;
