import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(() => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  });

  useEffect(() => {
    if (authData) {
      localStorage.setItem("user", JSON.stringify(authData));
    } else {
      localStorage.removeItem("user");
    }
  }, [authData]);

  const login = (userData) => {
    setAuthData(userData);
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setAuthData(null);
  };

  return (
    <AuthContext.Provider value={{ authData, setAuthData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Custom hook for accessing auth context anywhere
export const useAuth = () => useContext(AuthContext);
