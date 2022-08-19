import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userDetails/userSlice";

export default configureStore({
  reducer: {
    userDetails: userSlice
  }
});
