import { createSlice } from "@reduxjs/toolkit";

export const deleteManySlice = createSlice({
  name: "deleteMany",
  initialState: {
    check: [],
  },
  reducers: {
    checkItem: (state, action) => {
      const checked = action.payload.itemCheck;
      const value = action.payload.itemValue;
      if (checked) {
        state.check.push({ _id: value });
      } else {
        state.check = state.check.filter((e) => e._id !== value);
      }
    },
    clearCheckItem: (state, action) => {
      state.check = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { checkItem, clearCheckItem } = deleteManySlice.actions;

export default deleteManySlice.reducer;
