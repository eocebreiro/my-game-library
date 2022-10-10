import React from "react";
import { Navigate } from "react-router-dom";

// State
import { useUser } from "../contexts/UserContext";

export const PrivateRoute = ({ component: Component }) => {
  const { state } = useUser();

  if (state.isAuthenticated && !state.loading) {
    return <Component />;
  }
  return <Navigate to="/" />;
};
