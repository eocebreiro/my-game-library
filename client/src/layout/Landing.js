import React, { Component, useContext, useEffect } from "react";

import { Login } from "../components/Login";
import { Register } from "../components/Register";

import { AuthContext } from "../contexts/AuthContext";

export const Landing = () => {
  const { component } = useContext(AuthContext);

  return (
    <div className="landing">
      {component === "login" ? <Login /> : <Register />}
    </div>
  );
};
