/* eslint-disable camelcase */

const AUTHENTICATE = 'AUTHENTICATE';
const LOG_OUT = 'LOG_OUT';

export { AUTHENTICATE, LOG_OUT };

const authenticate = (user, token) => {
  const {
    id,
    email,
    first_name,
    last_name,
    role,
  } = user;

  return {
    type: AUTHENTICATE,
    payload: {
      id,
      email,
      firstName: first_name,
      lastName: last_name,
      role,
    },
    token,
  };
};

const logOut = () => ({
  type: LOG_OUT,
});

export { authenticate, logOut };
