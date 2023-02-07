import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function AuthWrapper() {
  const location = useLocation()
  const { token } = useAuth();

  return <>{token ? <Outlet /> : <Navigate to="/signin" state={{from: location}}/>}</>;
}

export default AuthWrapper;
