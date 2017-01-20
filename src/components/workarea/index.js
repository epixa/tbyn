import './index.css';

import React from 'react';
import Budget from '../../containers/budget';
import Reports from '../../containers/reports';
import Transactions from '../../containers/transactions';

const Workarea = () => (
  <div id="workarea">
    <Budget />
    <Reports />
    <Transactions />
  </div>
);

export default Workarea;
