import {
  createHashRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import routesConfig from "./routes-config";

const RouteRenderer = createHashRouter(
  createRoutesFromElements(
    <Route element={routesConfig.MAIN.element}>
      <Route
        path={routesConfig.EMPLOYEES.path}
        element={routesConfig.EMPLOYEES.element}
      ></Route>
      <Route
        path={routesConfig.LOGIN.path}
        element={routesConfig.LOGIN.element}
      ></Route>
      <Route
        path={routesConfig.UPLOAD.path}
        element={routesConfig.UPLOAD.element}
      ></Route>
      <Route
        path={routesConfig.UNKNOWN.path}
        element={routesConfig.UNKNOWN.element}
      ></Route>
    </Route>
  )
);
export default RouteRenderer;
