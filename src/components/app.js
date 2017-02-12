import './app.css';

import React from 'react';

import Sidebar from './sidebar';
import Workarea from './workarea';

const App = () => (
  <div className="app">
    <Sidebar />
    <Workarea />
  </div>
);

export default App;
