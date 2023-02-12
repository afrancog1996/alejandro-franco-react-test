import { Navigate } from "react-router-dom";
import { selectAuth } from "../../../features/login/LoginSlice";
import { useAppSelector } from "../../hooks";

const UnknowRoute = (props: any) => {
  const isAuth = useAppSelector(selectAuth);
  if (isAuth === "valid") {
    return <Navigate to={props.redirectTo} replace={true} />;
  } else {
    return props.children;
  }
};

export default UnknowRoute;
