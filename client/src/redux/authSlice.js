import { createSlice } from "@reduxjs/toolkit";
const getDataUser =
  localStorage.getItem("user") == null
    ? []
    : JSON.parse(localStorage.getItem("user"));
const setLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: getDataUser,
  },
  reducers: {
    loginData: (state, action) => {
      state.user = action.payload;
      setLocalStorage(action.payload);
    },
    logoutData: (state, action) => {
      state.user = [];
      localStorage.removeItem("user");
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginData, logoutData } = authSlice.actions;

export default authSlice.reducer;
