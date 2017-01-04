import React, { PropTypes } from 'react';

import AccountNavHeader from '../../../containers/navigation/account/nav-header';
import AccountNavList from './nav-list';

const AccountNav = ({ accounts, children, total }) => (
  <nav className="sidebar-nav sidebar-accountnav">
    <AccountNavHeader total={total}>
      {children}
    </AccountNavHeader>
    <AccountNavList accounts={accounts} />
  </nav>
);

AccountNav.propTypes = {
  accounts: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  total: PropTypes.number.isRequired,
};

export default AccountNav;
