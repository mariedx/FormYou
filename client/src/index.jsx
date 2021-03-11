import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import { Provider } from 'react-redux';
import stores from 'stores';

ReactDOM.render(
  <Provider store={stores}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
