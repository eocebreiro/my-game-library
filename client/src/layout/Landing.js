import React, { Component, useContext, useEffect } from "react";

import { Login } from "../components/Login";
import { Register } from "../components/Register";

import { AuthContext } from "../contexts/AuthContext";

export const Landing = () => {
  const { auth } = useContext(AuthContext);

  return (
    <div className="landing">
      <h1 className="text-center display-1 text-light">My Gaming Library</h1>
      {auth.component === "login" ? <Login /> : <Register />}
    </div>
  );
};
