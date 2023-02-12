import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchAcountData } from "./LoginApi";

interface IUserState {
  status: "logged" | "log out" | "loading" | "error";
}

interface ILoginState {
  isAuth: "valid" | "invalid";
  userState: IUserState;
}

const initialState: ILoginState = {
  isAuth: "valid",
  userState: {
    status: "log out",
  },
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
      state.userState.status = "log out";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCredentials.pending, (state) => {
        state.userState.status = "loading";
      })
      .addCase(getCredentials.fulfilled, (state, action) => {
        if (action.payload) {
          state.isAuth = "valid";
          state.userState.status = "logged";
        } else {
          state.isAuth = "invalid";
          state.userState.status = "log out";
        }
      })
      .addCase(getCredentials.rejected, (state) => {
        state.userState.status = "error";
      });
  },
});

export const { isLogingout } = loginSlice.actions;
export const selectAuth = (state: RootState) => state.login.isAuth;

export default loginSlice.reducer;
