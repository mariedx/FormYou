/* eslint-disable no-case-declarations */

import Cookies from 'js-cookie';
import config from 'config';
import { AUTHENTICATE, LOG_OUT } from 'stores/users/userActions';

const emptyState = {
  id: null,
  email: '',
  firstName: '',
  lastName: '',
  role: '',
};

const getUser = () => {
  if (Cookies.get(config.COOKIE_STORAGE_KEY) === undefined) return undefined;
  return JSON.parse(localStorage.getItem(config.LOCAL_STORAGE_KEY));
};

const initialState = getUser() || emptyState;

const userReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case AUTHENTICATE:
      const { token } = action;
      Cookies.set(config.COOKIE_STORAGE_KEY, token);
      const { payload } = action;
      localStorage.setItem(config.LOCAL_STORAGE_KEY, JSON.stringify(payload));

      return {
        ...state,
        ...payload,
      };
    case LOG_OUT:
      Cookies.remove(config.COOKIE_STORAGE_KEY);
      localStorage.removeItem(config.LOCAL_STORAGE_KEY);
      return {
        ...emptyState,
      };
    default:
      return state;
  }
};

export default userReducer;
