import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "uiSlice",
  initialState: {
    apiKey: "YOUR_TMDB_APİ_KEY",
    isOpen: true,
    selectedId: "",
    starClickedNumber: 0,
  },
  reducers: {
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    setSelectedId: (state, action) => {
      state.selectedId = action.payload;
    },
    setStarClickedNumber: (state, action) => {
      state.starClickedNumber = action.payload;
    },
  },
});

export const { setIsOpen, setSelectedId, setStarClickedNumber } =
  uiSlice.actions;

export default uiSlice.reducer;
