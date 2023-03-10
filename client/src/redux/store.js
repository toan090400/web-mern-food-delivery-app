import { configureStore } from "@reduxjs/toolkit";
import styleSlice from "./styleSlice";
import shoppingCartSlice from "./shoppingCartSlice";
export default configureStore({
  reducer: {
    styles: styleSlice,
    shoppingCart: shoppingCartSlice,
  },
});
