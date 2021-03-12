export const checkIn = () => ({
  type: 'CHECK_IN',
});

export const checkOut = () => ({
  type: 'CHECK_OUT',
});

export const CurrentUser = ({ id, firstName, email }) => ({
  type: 'currentUser',
  id,
  firstName,
  email,
});
