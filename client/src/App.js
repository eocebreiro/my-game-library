import { AuthContextProvider } from "./contexts/AuthContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Landing } from "./layout/Landing";
import { Dashboard } from "./layout/Dashboard";

function App() {
  return (
    <div className="App bg-dark">
      <AuthContextProvider>
        <Landing />
      </AuthContextProvider>
    </div>
  );
}

export default App;
