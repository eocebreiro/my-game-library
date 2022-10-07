import { UserProvider } from "./contexts/UserContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Landing } from "./layout/Landing";
import { Dashboard } from "./layout/Dashboard";

function App() {
  return (
    <div className="App bg-dark">
      <UserProvider>
        <Landing />
      </UserProvider>
    </div>
  );
}

export default App;
