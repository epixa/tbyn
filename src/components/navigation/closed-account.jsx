'use strict';

import React from 'react';

import AccountNav from '../../containers/navigation/account/nav';

const ClosedAccountNav = ({ accounts }) => (
  <AccountNav accounts={accounts}>
    Closed Accounts
  </AccountNav>
);

export default ClosedAccountNav;
