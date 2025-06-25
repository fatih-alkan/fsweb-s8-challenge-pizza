import { Switch, Route } from "react-router-dom";
import "./App.css";
import SiparisForm from "./components/SiparisForm.jsx";
import HomePage from "./components/HomePage";
import SiparisOnay from "./components/SiparisOnay.jsx";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage } />
      <Route path="/SiparisForm" component={SiparisForm } />
      <Route path="/SiparisOnay" component={SiparisOnay } />
    </Switch>
  );
}

export default App;
