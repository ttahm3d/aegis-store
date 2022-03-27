import { useAuth } from "../context/auth";
import { Outlet, Navigate, useLocation } from "react-router-dom";

export default function () {
  const { authState } = useAuth();
  const location = useLocation();

  return authState?.isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/auth/login" state={{ from: location }} replace />
  );
}
