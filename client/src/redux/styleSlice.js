import { createSlice } from "@reduxjs/toolkit";

export const styleSlice = createSlice({
  name: "styles",
  initialState: {
    menuBar: false,
    shoppingCard: false,
    homeProductSelect: "All",
    menuAdmin: false,
    imageChoose: false,
    foodDetailImageChoose: "",
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
    imageChoose: (state, action) => {
      state.imageChoose = !state.imageChoose;
    },
    foodDetailImageChoose: (state, action) => {
      if (action.payload === "") {
        state.foodDetailImageChoose = "";
      } else {
        state.foodDetailImageChoose = action.payload;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  menuBar,
  shoppingCard,
  homeProductSelect,
  menuAdmin,
  imageChoose,
  foodDetailImageChoose,
} = styleSlice.actions;

export default styleSlice.reducer;
