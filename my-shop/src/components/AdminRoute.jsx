import React from "react";
import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {
  const savedUser = localStorage.getItem("user");

  if (!savedUser) {
    return <Navigate to="/login" replace />;
  }

  const user = JSON.parse(savedUser);

  if (user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default AdminRoute;