'use strict';

import React from 'react';

import AccountNav from '../../containers/navigation/account/nav';

const BudgetAccountNav = ({ accounts }) => (
  <AccountNav accounts={accounts}>
    Budget Accounts
  </AccountNav>
);

export default BudgetAccountNav;
