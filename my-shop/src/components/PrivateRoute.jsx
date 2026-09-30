import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const savedUser = localStorage.getItem("user");

  if (!savedUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default PrivateRoute;