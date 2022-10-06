import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Landing } from "./layout/Landing";
import { Dashboard } from "./layout/Dashboard";

function App() {
  return (
    <div className="App bg-dark">
      <Landing />
    </div>
  );
}

export default App;
