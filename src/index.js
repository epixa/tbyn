import './index.css';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import budgetApp from './reducers';
import App from './components/app';

const store = createStore(budgetApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
