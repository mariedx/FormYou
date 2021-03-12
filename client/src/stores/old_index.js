import { combineReducers, createStore } from 'redux';
import checkinReducer from './reducers/checkinReducer';
import userReducer from './reducers/userReducers';

const allReducers = combineReducers({
  checkinReducer, userReducer,
});

const stores = createStore(
  allReducers,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default stores;
