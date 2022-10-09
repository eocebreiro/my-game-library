import React, { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// State
import { useUser } from "./contexts/UserContext";
import { setAuthToken } from "./utils/setAuthToken";

// Actions
import { loadUser } from "./contexts/UserActions";

// Components
import { Landing } from "./layout/Landing";
import { Dashboard } from "./layout/Dashboard";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  const { dispatch } = useUser();

  useEffect(() => {
    loadUser(dispatch);
  }, []);

  return (
    <div className="App bg-dark">
      <Landing />
    </div>
  );
}

export default App;
