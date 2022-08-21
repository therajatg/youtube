import { useAuth } from "./authContext";
import { Navigate, useLocation } from "react-router-dom";

export function RequiresAuth({ children }) {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  console.log(location);
  return isLoggedIn ? (
    children
  ) : (
    <Navigate state={{ path: location.pathname }} to="/login" replace />
  );
}
