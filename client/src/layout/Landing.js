import React from "react";

// State
import { useUser } from "../contexts/UserContext";

// Components
import { Login } from "../components/Login";
import { Register } from "../components/Register";

export const Landing = () => {
  const { state } = useUser();

  return (
    <div className="landing">
      <h1 className="text-center display-1 text-light">My Gaming Library</h1>
      {state.component === "login" ? <Login /> : <Register />}
    </div>
  );
};
