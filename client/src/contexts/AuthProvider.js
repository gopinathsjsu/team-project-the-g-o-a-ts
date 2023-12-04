import React, { createContext, useCallback, useContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthed, setIsAuthed] = useState(false);
  const [userData, setUserData] = useState(null);

  const login = useCallback((token, user) => {
    localStorage.setItem("token", token);
    setUserData(user);
    setIsAuthed(true);
  }, []);

  const updateUserData = (newData) => {
    console.log("updating...");
    setUserData(newData);
  };

  const logout = () => {
    console.log("logging out...");
    localStorage.removeItem("token");
    setUserData(null);
    setIsAuthed(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthed, userData, login, logout, updateUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
