import { nanoid } from "nanoid";

import { lazy } from "react";
import ProtectedRoute from "./protected-route";
import appRoutes from "./routes";

const MainApp = lazy(() => import("../../components/main/main"));
const EmployeesLandingPage = lazy(() => import("../../features/employees/Employees"));
const LoginLandingPage = lazy(() => import("../../features/login/Login"));
const UploadLandingPage = lazy(() => import("../../features/upload/Upload"));

const routesConfig = {
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
      <ProtectedRoute ifNoAuthGoTo={appRoutes.LOGIN}>
        <UploadLandingPage />
      </ProtectedRoute>
    ),
  },
  EMPLOYEES: {
    key: nanoid(),
    path: appRoutes.EMPLOYEES,
    element: (
      <ProtectedRoute ifNoAuthGoTo={appRoutes.LOGIN}>
        <EmployeesLandingPage />
      </ProtectedRoute>
    ),
  },
  UNKNOWN: {
    key: nanoid(),
    path: appRoutes.UNKNOWN,
    element: (
      <ProtectedRoute ifNoAuthGoTo={appRoutes.LOGIN}>
        <div>Landing Page Not Found!</div>
      </ProtectedRoute>
    ),
  },
};

export default routesConfig;
