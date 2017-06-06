import './app.css';

import React from 'react';

import Sidebar from '../containers/sidebar';
import Workarea from './workarea';
import Modals from '../containers/modals';

const App = () => (
  <div className="app">
    <Sidebar />
    <Workarea />
    <Modals />
  </div>
);

export default App;
