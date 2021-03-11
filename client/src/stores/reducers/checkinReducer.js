const initialState = {
  checkedIn: false,
  error: '',
};

const checkInReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHECK_IN':
      return {
        ...state,
        checkedIn: true,
      };
    case 'CHECK_OUT':
      return {
        ...state,
        checkedIn: false,
      };
    default:
      return state;
  }
};

export default checkInReducer;
