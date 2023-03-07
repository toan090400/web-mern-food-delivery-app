import { createSlice } from "@reduxjs/toolkit";

export const styleSlice = createSlice({
  name: "styles",
  initialState: {
    menuBar: false,
  },
  reducers: {
    menuBar: (state, action) => {
      state.menuBar = !state.menuBar;
    },
  },
});

// Action creators are generated for each case reducer function
export const { menuBar } = styleSlice.actions;

export default styleSlice.reducer;
