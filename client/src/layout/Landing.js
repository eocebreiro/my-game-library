import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

// State
import { useUser } from "../contexts/UserContext";

// Actions
import { loadUser } from "../contexts/UserActions";

// Components
import { Login } from "../components/Auth/Login";
import { Register } from "../components/Auth/Register";

export const Landing = () => {
  const { state, dispatch } = useUser();

  if (state.isAuthenticated) {
    loadUser(dispatch);
    return <Navigate to="/my-game-library/dashboard" />;
  }

  return (
    <div className="landing">
      <h1 className="text-center display-1 text-light">My Gaming Library</h1>
      {state.component === "login" ? <Login /> : <Register />}
    </div>
  );
};
