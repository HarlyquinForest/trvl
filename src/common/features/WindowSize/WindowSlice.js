import { createSlice } from "@reduxjs/toolkit";

export const windowSlice = createSlice({
  name: "windowSize",
  initialState: {
    value: "md",
  },
  reducers: {
    setWindowSmall: (state) => {
      state.value = "sm";
    },
    setWindowMedium: (state) => {
      state.value = "md";
    },
    setWindowLarge: (state) => {
      state.value = "lg";
    },
  },
});
export const { setWindowSmall, setWindowMedium, setWindowLarge } =
  windowSlice.actions;

export default windowSlice.reducer;
