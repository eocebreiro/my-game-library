import React, { createContext, useReducer, useContext } from "react";
import { UserReducer } from "./UserReducer";

// State
const initialState = {
  component: "login",
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
  profile: null,
  reload: false,
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};

// Context
export const UserContext = createContext(initialState);
