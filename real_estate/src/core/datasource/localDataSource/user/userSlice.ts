import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../../types/user";
import { RootState } from "../../../types/rootState";
const initialState: User = {
  email: "",
  username: "",
  photoURL: ''
}
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(prevState, { type, payload }: { type: string, payload: User }) {
      console.log(payload)
      return {
        ...payload
      }
    }
  }
})
export const { setUser } = userSlice.actions
export default userSlice.reducer
export const user = userSlice.name
export const extractUserSlice = (global: RootState) => {
  return global[user]
}