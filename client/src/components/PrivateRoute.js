import React from "react";
import { Navigate } from "react-router-dom";

// State
import { useUser } from "../contexts/UserContext";

export const PrivateRoute = ({ component: Component }) => {
  const { state } = useUser();
  console.log("state");
  console.log(state.loading);

  console.log(state.isAuthenticated);

  if (state.isAuthenticated && !state.loading) {
    console.log("PRIVATEROUTE");
    return <Component />;
  }
  return <Navigate to="/" />;
};
