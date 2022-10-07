import React, { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducers/authReducer";

export const AuthContext = createContext();
export const AuthContextDispatch = createContext();

export const AuthContextProvider = (props) => {
  const [auth, dispatch] = useReducer(authReducer, {
    component: "login",
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
  });

  return (
    <AuthContext.Provider value={auth}>
      <AuthContextDispatch.Provider value={dispatch}>
        {props.children}
      </AuthContextDispatch.Provider>
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export const useAuthDispatch = () => {
  return useContext(AuthContext);
};
