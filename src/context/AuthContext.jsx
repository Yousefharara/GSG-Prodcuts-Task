import React, { createContext, useContext, useState } from "react";
import { ROLES } from "../constant/Role";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [role, setRole] = useState(ROLES.GUEST);
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");

  return (
    <AuthContext.Provider
      value={{ role, user, token, setRole, setUser, setToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
