import { nanoid } from "nanoid";

import { lazy } from "react";

import appRoutes from "./routes";
import UnknowRoute from "./protect-route/unknown-route";

const MainApp = lazy(() => import("../../components/main/main"));
const EmployeesLandingPage = lazy(
  () => import("../../features/employees/Employees")
);
const LoginLandingPage = lazy(() => import("../../features/login/Login"));
const UploadLandingPage = lazy(() => import("../../features/upload/Upload"));
const ProtectedRoute = lazy(() => import("./protect-route/protected-route"));
const HomeLandingPage = lazy(() => import("../../components/home/home"));

const routesConfig = {
  HOME: {
    key: nanoid(),
    path: appRoutes.HOME, 
    element:  <HomeLandingPage />,
  },
  MAIN: {
    key: nanoid(),
    path: appRoutes.MAIN,
    element: <MainApp />,
  },
  LOGIN: {
    key: nanoid(),
    path: appRoutes.LOGIN,
    element: <LoginLandingPage />,
  },
  UPLOAD: {
    key: nanoid(),
    path: appRoutes.UPLOAD,
    element: (
      <ProtectedRoute redirectTo={appRoutes.LOGIN}>
        <UploadLandingPage />
      </ProtectedRoute>
    ),
  },
  EMPLOYEES: {
    key: nanoid(),
    path: appRoutes.EMPLOYEES,
    element: (
      <ProtectedRoute redirectTo={appRoutes.LOGIN}>
        <EmployeesLandingPage />
      </ProtectedRoute>
    ),
  },
  UNKNOWN: {
    key: nanoid(),
    path: appRoutes.UNKNOWN,
    element: (
      <UnknowRoute redirectTo={appRoutes.EMPLOYEES}>
        <HomeLandingPage />
      </UnknowRoute>
    ),
  },
};

export default routesConfig;
