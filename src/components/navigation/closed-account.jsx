'use strict';

import React from 'react';

import AccountNav from '../../containers/navigation/account/nav';

const ClosedAccountNav = ({ accounts, truncated }) => (
  <AccountNav accounts={accounts}>
    {truncated ? 'Closed Accts' : 'Closed Accounts'}
  </AccountNav>
);

export default ClosedAccountNav;
