import { configureStore } from "@reduxjs/toolkit";
import styleSlice from "./styleSlice";
import shoppingCartSlice from "./shoppingCartSlice";
import deleteManySlice from "./deleteManySlice";
export default configureStore({
  reducer: {
    styles: styleSlice,
    shoppingCart: shoppingCartSlice,
    deleteMany: deleteManySlice,
  },
});
