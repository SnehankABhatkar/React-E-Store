import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useUserInfoQuery } from "../../features/account/accountApi";

function RequireAuth() {
  const { data: user, isLoading } = useUserInfoQuery();
  const loaction = useLocation();

  if (isLoading) return <div>Loading...</div>;

  if (!user) {
    return <Navigate to="/login" state={{ from: loaction }} />;
  }

  const adminRoutes = ["/inventory", "/adminDashboard"];

  if (
    adminRoutes.includes(loaction.pathname) &&
    !user.roles.includes("Admin")
  ) {
    return <Navigate to={"/"} replace />;
  }

  return <Outlet />;
}

export default RequireAuth;
