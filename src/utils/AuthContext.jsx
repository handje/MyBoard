import React, { createContext, useState, useContext } from "react";

import { getItem, setItem, removeItem } from "./useLocalStorage";
// AuthContext 생성
const AuthContext = createContext("");

// AuthProvider 생성
export const AuthProvider = ({ children }) => {
  const userId = getItem("ID") ?? "";
  const [loggedInUser, setLoggedInUser] = useState(userId);

  const login = (userId) => {
    setLoggedInUser(userId);
    setItem("ID", userId);
  };

  const logout = () => {
    removeItem("ID");
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
