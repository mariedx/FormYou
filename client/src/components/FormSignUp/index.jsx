import React, { useState } from 'react';
import API_BASE_URL from 'services/api';
// import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import { checkIn, CurrentUser } from '../../stores/actions';
// import useFetch from 'services/api/users';
import { authenticate } from 'stores/users/userActions';

const url = `${API_BASE_URL}signup`;

const FormSignUp = () => {
  // const [newUser, setNewUser] = useState({});
  const [firstNameValue, setFirstNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [passwordConfirmationValue, setPasswordConfirmationValue] = useState('');
  const dispatch = useDispatch();
  // const history = useHistory();

  const handleFirstName = (e) => {
    const { value } = e.target;
    setFirstNameValue(value);
  };

  const handleLastName = (e) => {
    const { value } = e.target;
    setLastNameValue(value);
  };

  const handleEmail = (e) => {
    const { value } = e.target;
    setEmailValue(value);
  };

  const handlePassword = (e) => {
    const { value } = e.target;
    setPasswordValue(value);
  };

  const handlePasswordConfirmation = (e) => {
    const { value } = e.target;
    setPasswordConfirmationValue(value);
  };

  const validateSubmit = async (e) => {
    e.preventDefault();
    if (passwordValue !== passwordConfirmationValue) {
      alert('Les mots de passes ne correspondent pas');
      return;
    }
    const userData = {
      user: {
        email: emailValue,
        password: passwordValue,
        password_confirmation: passwordConfirmationValue,
        first_name: firstNameValue,
        last_name: lastNameValue,
        role_id: 1,
      },
    };
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (response.status !== 200) {
      alert('error during sign up!');
      return;
    }

    const token = response.headers.get('Authorization').split('Bearer ')[1];

    const data = await response.json();
    const userDataResponse = data.data.attributes;
    dispatch(authenticate({
      email: userDataResponse.email,
      first_name: userDataResponse.first_name,
      last_name: userDataResponse.last_name,
      role: userDataResponse.role,
    }, token));
    // const userInfo = () => {
    //   Cookies.set('token', userInfo.jwt);
    //   // eslint-disable-next-line no-console
    //   console.log(userInfo);
    //   dispatch(checkIn());
    //   dispatch(CurrentUser({
    //     email: userInfo.emailValue,
    //     firstName: userInfo.firstNameValue,
    //   }));
    //   history.push('/');
    // };
  };

  // const url = newUser && newUser.email;
  // const { status, data } = useFetch(url);
  // console.log(status, data);

  return (
    <div className="FormSignUp">
      <h1>Register</h1>
      <p>Please fill in this form to create an account.</p>
      <hr />
      <form>
        <label htmlFor="email">
          <b>Email</b>
          <input type="text" placeholder="Votre email" name="email" id="email" onChange={handleEmail} required />
        </label>

        <label htmlFor="first_name">
          <b>Prénom</b>
          <input type="text" placeholder="Votre prénom" name="first_name" id="first_name" onChange={handleFirstName} required />
        </label>

        <label htmlFor="Last_name">
          <b>Nom</b>
          <input type="text" placeholder="Votre nom" name="Last_name" id="Last_name" onChange={handleLastName} required />
        </label>

        <label htmlFor="password">
          <b>Mot de passe</b>
          <input type="password" placeholder="Votre mot de passe" name="psw" id="psw" onChange={handlePassword} required />
        </label>

        <label htmlFor="psw-repeat">
          <b>Confimer votre mot de passe</b>
          <input type="password" placeholder="Confirmer votre mot de passe" name="psw-repeat" id="psw-repeat" onChange={handlePasswordConfirmation} required />
        </label>
        <hr />
        <button type="submit" onClick={validateSubmit}>clique</button>
      </form>
    </div>
  );
};

export default FormSignUp;
