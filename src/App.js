import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './views/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route component={Home} exact path="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
