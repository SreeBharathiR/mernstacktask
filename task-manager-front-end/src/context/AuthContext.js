import React, { createContext, useState } from "react";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const handleLoginAuth = () => {
    setIsAuth(true);
  };
  const handleLogoutAuth = () => {
    setIsAuth(false);
  };
  return (
    <AuthContext.Provider value={{ isAuth, handleLoginAuth, handleLogoutAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
