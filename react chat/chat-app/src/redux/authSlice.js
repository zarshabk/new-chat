import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user"));
const initialState = {
  user: user ? user : {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    GET_USER: (state, action) => {
      state.user = action.payload;
    },
    LOGOUT_USER: (state) => {
      state.user = {};
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
});

export default authSlice.reducer;

export const { GET_USER, LOGOUT_USER } = authSlice.actions;
