import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const PrivateRoute = ({ element: Element }) => {
  const { currentUser } = useAuth();

  return currentUser ? <Element /> : <Navigate to="/login" />;
};

export default PrivateRoute;
