'use strict';

import './nav.scss';

import React from 'react';

import AccountNavHeader from '../../../containers/navigation/account/nav-header';
import AccountNavList from './nav-list';

const AccountNav = ({accounts, children, total}) => (
  <nav className="account-nav">
    <AccountNavHeader total={total}>
      {children}
    </AccountNavHeader>
    <AccountNavList accounts={accounts}/>
  </nav>
);

export default AccountNav;
