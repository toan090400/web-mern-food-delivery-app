import { configureStore } from "@reduxjs/toolkit";
import styleSlice from "./styleSlice";
export default configureStore({
  reducer: {
    styles: styleSlice,
  },
});
