import { Link } from 'react-router-dom';
import './style.scss';

const Navbar = () => (
  <div className="Navbar">
    <Link to="/" className="Navbar__title">FormYou</Link>
    <Link to="/log-in" className="Navbar__link">Log in</Link>
    <Link to="/sign-in" className="Navbar__link">Sign up</Link>
  </div>
);

export default Navbar;
