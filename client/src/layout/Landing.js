import React, { useContext, useEffect } from "react";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
import { AuthContext, AuthContextProvider } from "../contexts/AuthContext";

export const Landing = () => {
  const state = useContext(AuthContext);
  useEffect(() => {}, [state.component]);
  console.log("landing");
  console.log(state.component);

  return (
    <div className="landing">
      <AuthContextProvider>
        {state.component === "login" ? <Login /> : <Register />}
      </AuthContextProvider>
    </div>
  );
};
