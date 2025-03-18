import { configureStore } from "@reduxjs/toolkit";

import { moviesSlice } from "./slices/moviesSlice";
import { uiSlice } from "./slices/uiSlice";

export default configureStore({
  reducer: {
    moviesSlice: moviesSlice.reducer,
    uiSlice: uiSlice.reducer,
  },
});
