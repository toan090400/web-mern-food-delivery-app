import { createSlice } from "@reduxjs/toolkit";

export const styleSlice = createSlice({
  name: "styles",
  initialState: {
    menuBar: false,
    shoppingCard: false,
    homeProductSelect: "All",
    menuAdmin: false,
  },
  reducers: {
    menuBar: (state, action) => {
      state.menuBar = !state.menuBar;
    },
    shoppingCard: (state, action) => {
      state.shoppingCard = !state.shoppingCard;
    },
    homeProductSelect: (state, action) => {
      state.homeProductSelect = action.payload;
    },
    menuAdmin: (state, action) => {
      state.menuAdmin = !state.menuAdmin;
    },
  },
});

// Action creators are generated for each case reducer function
export const { menuBar, shoppingCard, homeProductSelect, menuAdmin } =
  styleSlice.actions;

export default styleSlice.reducer;
