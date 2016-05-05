'use strict';

import './../../../styles/navigation/account/nav-list.scss';

import React from 'react';

import AccountLink from '../../../containers/navigation/account/link';

const AccountNavList = ({ accounts }) => (
  <div className="account-nav-list">
    {accounts.map(account =>
      <AccountLink key={account.get('id')} account={account} />
    )}
  </div>
);

export default AccountNavList;
