import React from "react";
import { useAuth } from "../../../context/AuthContext";
import { ROLES } from "../../../constant/Role";
import { Navigate } from "react-router-dom";
import { PATHS } from "../../../router/paths";

const GuestGuard = ({ children }) => {
  const { role } = useAuth();

  if (role === ROLES.USER) return <Navigate to={PATHS.PRODUCT.ROOT} />;

  if (role === ROLES.ADMIN) return <Navigate to={PATHS.ADMIN.ROOT} />;

  return children;
};

export default GuestGuard;
