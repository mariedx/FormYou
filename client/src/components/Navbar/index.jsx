import { Link } from 'react-router-dom';
import './style.scss';

const Navbar = () => (
  <div className="Navbar">
    <Link to="/" className="Header__title">FormYou</Link>
    <Link to="/log-in" className="Header__link">Log in</Link>
    <Link to="/sign-in" className="Header__link">Sign up</Link>
  </div>
);

export default Navbar;
