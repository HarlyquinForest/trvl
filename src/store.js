import { configureStore } from "@reduxjs/toolkit";
import windowReducer from "./common/features/WindowSize/WindowSlice";

export default configureStore({
  reducer: {
    windowSize: windowReducer,
  },
});
