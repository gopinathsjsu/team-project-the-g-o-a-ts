import React, { useEffect } from "react";
import { useAuth } from "../contexts/AuthProvider";
import { jwtDecode } from "jwt-decode";
import { fetchUserById } from "./apiUtils";

const ReAuthenticator = () => {
  const { login } = useAuth();

  useEffect(() => {
    const reAuthenticate = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const decoded = jwtDecode(token);
        const userId = decoded.id;
        try {
          const userData = await fetchUserById(userId);
          if (userData) {
            login(token, userData);
          }
        } catch (error) {
          console.error("Reauthentication error in ReAuthenticator.js", error);
        }
      }
    };
    console.log("Reauthenticating...");
    reAuthenticate();
  }, [login]);

  return null;
};

export default ReAuthenticator;
