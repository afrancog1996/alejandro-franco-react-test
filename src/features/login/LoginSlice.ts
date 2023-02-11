import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface LoginState {
  isAuth: "valid" | "invalid";
}

const initialState: LoginState = {
  isAuth: "invalid",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    isAuthenticate: (state) => {
      state.isAuth = "valid";
    },
    isNotAuthenticate: (state) => {
      state.isAuth = "invalid";
    },
  }
});


export const { isAuthenticate, isNotAuthenticate } = loginSlice.actions;
export const selectAuth = (state: RootState) => state.login.isAuth;
export default loginSlice.reducer;
