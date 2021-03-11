import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './style.scss';

const Profile = () => {
  const title = 'Votre profil';
  const currentUser = useSelector((state) => state);
  const {
    email,
    firstName,
    lastName,
    role,
  } = currentUser;

  return (
    <div className="Profile">
      {!currentUser.id && (
        <Redirect to="/" />
      )}
      <h1 className="Profile__title">{title}</h1>
      <p className="Profile__email">
        Email :
        {email}
      </p>
      <p className="Profile__firstName">
        Prénom :
        {firstName}
      </p>
      <p className="Profile__lastName">
        Nom :
        {lastName}
      </p>
      <p className="Profile__role">
        Role :
        {role.title}
      </p>
    </div>
  );
};

export default Profile;
