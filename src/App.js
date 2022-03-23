import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Router>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
      </Router>
    </div>
  );
}

export default App;
