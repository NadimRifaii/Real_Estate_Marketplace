import { configureStore } from "@reduxjs/toolkit";
import userReducer, { user } from "./user/userSlice";
const store = configureStore({
  reducer: {
    [user]: userReducer
  }
})
export default store 