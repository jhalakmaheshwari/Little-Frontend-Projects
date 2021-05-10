import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TypeAhead from "./components/typeahead";
import Rating from "./components/rating";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/typeahead">TypeAhead</Link>
            </li>
            <li>
              <Link to="/rating">Rating</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/typeahead">
            <TypeAhead />
          </Route>
          <Route path="/rating">
            <Rating />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
