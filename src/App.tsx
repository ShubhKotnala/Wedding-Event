import "./App.css";
import Dashboard from "./dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/notFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dj" exact></Route>
        <Route path="/" exact>
          <Dashboard />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
