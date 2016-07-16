'use strict';

import React from 'react';

import AccountNav from '../../containers/navigation/account/nav';

const OffBudgetAccountNav = ({ accounts }) => (
  <AccountNav accounts={accounts}>
    Off Budget Accounts
  </AccountNav>
);

export default OffBudgetAccountNav;
