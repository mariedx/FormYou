import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import 'style.scss';

const App = () => (
  <div className="App">
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/sign-in">
          <h1>Inscription</h1>
        </Route>
        <Route path="/log-in">
          <h1>Connexion</h1>
        </Route>
      </Switch>
    </Router>
  </div>
);
export default App;
