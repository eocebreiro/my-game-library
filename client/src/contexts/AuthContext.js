import React, { Children, createContext, useState } from "react";

export const AuthContext = createContext({
  component: "login",
  setComponent: () => {},
});

export const AuthContextProvider = (props) => {
  const setComponent = (toggle) => {
    setState({ ...state, component: toggle });
  };
  const initState = {
    component: "login",
    setComponent: setComponent,
  };

  const [state, setState] = useState(initState);

  return (
    <AuthContext.Provider value={{ ...state }}>
      {props.children}
    </AuthContext.Provider>
  );
};
