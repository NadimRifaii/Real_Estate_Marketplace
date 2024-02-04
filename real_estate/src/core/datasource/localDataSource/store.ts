import { configureStore } from "@reduxjs/toolkit";
import userSlice, { user } from "./user/userSlice";
const store = configureStore({
  reducer: {
    [user]: userSlice
  }
})
export default store 