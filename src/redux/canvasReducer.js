import { createSlice } from "@reduxjs/toolkit";

const canvasSlice = createSlice({
  name: "canvas",
  initialState: { isOpen: false },
  reducers: {
    openCanvas: (state, text) => {
      state.isOpen = text.payload;
    },
  },
});

export const { openCanvas } = canvasSlice.actions;
export default canvasSlice.reducer;
