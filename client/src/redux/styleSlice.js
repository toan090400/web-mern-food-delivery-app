import { createSlice } from "@reduxjs/toolkit";

export const styleSlice = createSlice({
  name: "styles",
  initialState: {
    menuBar: false,
    homeProductSelect: "All",
  },
  reducers: {
    menuBar: (state, action) => {
      state.menuBar = !state.menuBar;
    },
    homeProductSelect: (state, action) => {
      state.homeProductSelect = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { menuBar, homeProductSelect } = styleSlice.actions;

export default styleSlice.reducer;
