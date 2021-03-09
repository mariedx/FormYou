import Navbar from 'components/Navbar';
import { Router, Route, Switch } from 'react-router-dom';

const App = () => (
  <div className="App">
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <h1>Home</h1>
        </Route>
        <Route path="/sign-in">
          <h1>Inscription</h1>
        </Route>
        <Route path="/log-in">
          <h1>Inscription</h1>
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
