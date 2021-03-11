import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './style.scss';
import API_BASE_URL from 'services/api';
import { useDispatch } from 'react-redux';
import { authenticate } from 'stores/users/userActions';

const url = `${API_BASE_URL}login`;

const LogIn = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const handleEmail = (e) => {
    const { value } = e.target;
    setEmailValue(value);
  };

  const handlePassword = (e) => {
    const { value } = e.target;
    setPasswordValue(value);
  };

  const validateSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      user: {
        email: emailValue,
        password: passwordValue,
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
      alert('Erreur durant la connexion');
      return;
    }

    const data = await response.json();
    const userDataResponse = data.data.attributes;
    const userDataResponseId = data.data.id;
    const token = response.headers.get('Authorization').split('Bearer ')[1];

    dispatch(authenticate({
      id: userDataResponseId,
      email: userDataResponse.email,
      first_name: userDataResponse.first_name,
      last_name: userDataResponse.last_name,
      role: userDataResponse.role,
    }, token));

    history.push('/');
  };

  return (
    <div className="LogIn">
      <h1>Connecte toi</h1>
      <div className="LogIn-card">
        <form>
          <div className="LogIn-input">
            <label htmlFor="email">
              <p>Email</p>
              <input type="text" placeholder="Votre email" name="email" id="email" onChange={handleEmail} />
            </label>
            <label htmlFor="password">
              <p>Password</p>
              <input type="password" placeholder="Votre mot de passe" name="password" id="password" onChange={handlePassword} />
            </label>
            <div>
              <button type="submit" onClick={validateSubmit}>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
