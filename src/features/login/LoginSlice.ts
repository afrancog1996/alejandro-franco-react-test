import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchAcountData } from "./LoginApi";

interface ILoginState {
  isAuth: "valid" | "invalid";

}

const initialState: ILoginState = {
  isAuth: "valid",
};

export const getCredentials = createAsyncThunk(
  "login/credentials",
  async (formData: any) => {
    const response = await fetchAcountData();

    if (
      response.data.name === formData.name &&
      response.data.password === formData.pass
    ) {
      return true;
    }
    return false;
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    isLogingout: (state) => {
      state.isAuth = "invalid";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCredentials.fulfilled, (state, action) => {
        if (action.payload) {
          state.isAuth = "valid";
        } else {
          state.isAuth = "invalid";
        }
      })
  },
});

export const { isLogingout } = loginSlice.actions;
export const selectAuth = (state: RootState) => state.login.isAuth;

export default loginSlice.reducer;
