import React, { createContext, useReducer } from "react";
import { authReducer } from "../reducers/authReducer";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [component, dispatch] = useReducer(authReducer, "login");

  return (
    <AuthContext.Provider value={{ component, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};
