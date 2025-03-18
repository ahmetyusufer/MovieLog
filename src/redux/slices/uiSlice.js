import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "uiSlice",
  initialState: {
    apiKey: "59f36d959e7ded586d6e1e21fae581fa",
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
