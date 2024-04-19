import React, { createContext, useState, useContext } from "react";

// AuthContext 생성
const AuthContext = createContext("");

// AuthProvider 생성
export const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState("");

  const login = (userId) => {
    setLoggedInUser(userId);
  };

  const logout = () => {
    setLoggedInUser("");
  };

  return (
    <AuthContext.Provider value={{ loggedInUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// useContext 훅을 사용하여 AuthContext 사용
export const useAuth = () => {
  return useContext(AuthContext);
};
