import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import 'style.scss';
import SignUp from 'pages/SignUp';
import LogIn from 'pages/LogIn';
import Profile from 'pages/Profile';
import FormationPage from './pages/FormationPage';

const App = () => (
  <div className="App">
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/log-in">
          <LogIn />
        </Route>
        <Route path="/formations/:formationId">
          <FormationPage />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  </div>
);
export default App;
