import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// State
import { useUser } from "./contexts/UserContext";
import { setAuthToken } from "./utils/setAuthToken";

// Actions
import { loadUser } from "./contexts/UserActions";

// Components
import { PrivateRoute } from "./components/PrivateRoute";
import { Landing } from "./layout/Landing";
import { Dashboard } from "./layout/Dashboard";
import { Navbar } from "./layout/Navbar";
import { AddGame } from "./layout/AddGame";
import { DeletePopup } from "./components/DeletePopup";

function App() {
  const { dispatch } = useUser();

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    loadUser(dispatch);
  }, []);

  return (
    <div className="App bg-dark">
      <Router>
        <Navbar />
        <DeletePopup />
        <Routes>
          <Route
            exact
            path="/dashboard"
            element={<PrivateRoute component={Dashboard} />}
          />
          <Route
            exact
            path="/addgame"
            element={<PrivateRoute component={AddGame} />}
          />
          <Route exact path="/" element={<Landing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
