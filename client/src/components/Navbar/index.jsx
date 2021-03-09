import { Link } from 'react-router-dom';
import './style.scss';

const Navbar = () => (
  <div className="Navbar">
    <Link to="/" className="Navbar__title">FormYou</Link>
    <div className="Navbar__right">
      <Link to="/log-in" className="Navbar__link">Connexion</Link>
      <Link to="/sign-in" className="Navbar__link">Inscription</Link>
    </div>
  </div>
);

export default Navbar;
