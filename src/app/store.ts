import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { EmployeeApi } from "./api/EmployeesApi";
import loginReducer from "../features/login/LoginSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
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
