import { Navigate } from "react-router-dom";
import { selectAuth } from "../../features/login/LoginSlice";
import { useAppSelector } from "../hooks";
import appRoutes from "./routes";

const ProtectedRoute = (props: any) => {
  const isAuth = useAppSelector(selectAuth);
  if (isAuth) {
    <Navigate to={props.ifNoAuthGoTo} replace />;
  } else {
    <Navigate to={appRoutes.EMPLOYEES} replace />;
  }
  return props.children;
};

export default ProtectedRoute;
