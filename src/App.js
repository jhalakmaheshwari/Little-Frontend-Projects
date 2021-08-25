import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TypeAhead from "./components/typeahead";
import Rating from "./components/rating";
import Todo from "./components/todo";
import TicTacToe from "./components/tictactoe";
import { useStateExample } from "./components/hooksImplement";
import Shopping from "./components/Shopping";
import TaskRunner from "./components/taskrunner";
import PollingWidget from "./components/pollingWidget";
import Clock from "./components/clock";
import InfiniteScroll from "./components/infinitescroll";
import DatePicker from "./components/DatePicker";
import TypeAhead2 from "./components/typeahead2";
import Carousel from "./components/Carousel";

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
            <li>
              <Link to="/ToDo">TODO</Link>
            </li>
            <li>
              <Link to="/tictactoe">TICTACTOE</Link>
            </li>
            <li>
              <Link to="/reacthooks">HOOKS</Link>
            </li>
            <li>
              <Link to="/shopping">Shopping</Link>
            </li>
            <li>
              <Link to="/taskrunner">Task Runner</Link>
            </li>
            <li>
              <Link to="/polling">Polling Widget</Link>
            </li>
            <li>
              <Link to="/clock">Clock</Link>
            </li>
            <li>
              <Link to="/infinitescroll">Infinite Scroll</Link>
            </li>
            <li>
              <Link to="/datepicker">DatePicker</Link>
            </li>
            <li>
              <Link to="/typeahead2">typeahead</Link>
            </li>
            <li>
              <Link to="/carousel">Carousel</Link>
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
          <Route path="/todo">
            <Todo />
          </Route>
          <Route path="/tictactoe">
            <TicTacToe />
          </Route>
          <Route path="/reacthooks">{useStateExample()}</Route>
          <Route path="/shopping">
            <Shopping />
          </Route>
          <Route path="/taskrunner">
            <TaskRunner />
          </Route>
          <Route path="/polling">
            <PollingWidget />
          </Route>
          <Route path="/clock">
            <Clock />
          </Route>
          <Route path="/infinitescroll">
            <InfiniteScroll />
          </Route>
          <Route path="/datepicker">
            <DatePicker />
          </Route>
          <Route path="/typeahead2">
            <TypeAhead2 />
          </Route>
          <Route path="/carousel">
            <Carousel />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
