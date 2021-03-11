import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from 'stores/users/userActions';
import './style.scss';

const Navbar = () => {
  const currentUser = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="Navbar">
      <Link to="/" className="Navbar__title">FormYou</Link>
      <div className="Navbar__right">
        {!currentUser.id && (
          <>
            <Link to="/log-in" className="Navbar__link">Connexion</Link>
            <Link to="/sign-up" className="Navbar__link">Inscription</Link>
          </>
        )}

        {currentUser.id && (
          <>
            <Link to="/profile" className="Navbar__link">Profile</Link>
            <button
              className="Navbar__logoutButton"
              type="button"
              onClick={handleLogout}
            >
              Déconnexion
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
