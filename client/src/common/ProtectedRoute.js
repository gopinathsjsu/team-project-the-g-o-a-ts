import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { userData } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(userData);
    if (!userData || userData.role !== "Admin") {
      navigate("/");
    }
  }, [userData, navigate]);

  if (!userData || userData.role !== "Admin") {
    return null; // or a loading indicator
  }

  return children;
};

export default ProtectedRoute;
