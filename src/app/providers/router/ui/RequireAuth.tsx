import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { FC, ReactNode } from "react";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

interface RequireAuthProps {
  children: JSX.Element;
}

export const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const user = useSelector(getUserAuthData);
  const location = useLocation();

  if (!user) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  return children;
};
