const initialState = {
  id: 'still not logged in',
  firstName: 'not logged in',
  email: 'not logged in',
};

const userReducer = (state = initialState, action) => {
  const {
    type, id, firstName, email,
  } = action;

  switch (type) {
    case 'currentUser':
      return {
        ...state,
        id,
        firstName,
        email,
      };
    default:
      return state;
  }
};

export default userReducer;
