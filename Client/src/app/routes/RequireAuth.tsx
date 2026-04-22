import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useUserInfoQuery } from "../../features/account/accountApi";

function RequireAuth() {
  const { data: user, isLoading } = useUserInfoQuery();
  const loaction = useLocation();

  if (isLoading) return <div>Loading...</div>;

  if (!user) {
    return <Navigate to="/login" state={{ from: loaction }} />;
  }

  return <Outlet />;
}

export default RequireAuth;
