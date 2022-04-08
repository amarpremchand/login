import "./App.css";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginSuccess from "./components/LoginSuccess";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={SignUp}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/loginSuccess" component={LoginSuccess}></Route>
        </Switch>
      </Router>
    </div>
  );
}
