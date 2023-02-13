import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import loginReducer from "../features/login/LoginSlice";
import { EmployeeApi } from "./api/EmployeesApi";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    [EmployeeApi.reducerPath]: EmployeeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(EmployeeApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
