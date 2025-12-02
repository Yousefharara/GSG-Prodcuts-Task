import React from "react";
import { useAuth } from "../../../context/AuthContext";
import { ROLES } from "../../../constant/Role";
import { Navigate, Outlet } from "react-router-dom";
import { PATHS } from "../../../router/paths";

const UserGuard = () => {
  const { role } = useAuth();

  if (role === ROLES.USER) return <Outlet />;

  return <Navigate to={PATHS.HOME} replace={true} />;
};

export default UserGuard;
