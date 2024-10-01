import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  user: null,
};
const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user = null;
    },
    login: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
  },
});
export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
