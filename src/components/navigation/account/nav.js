import React, { PropTypes } from 'react';

import AccountNavHeader from '../../../containers/navigation/account/nav-header';
import AccountNavList from './nav-list';

const AccountNav = ({ accounts, children, collapsed, headerClickHandler, total, type }) => (
  <nav className="sidebar-nav sidebar-accountnav">
    <AccountNavHeader total={total} type={type} onClick={headerClickHandler(type)}>
      {children}
    </AccountNavHeader>
    {!collapsed && <AccountNavList accounts={accounts} />}
  </nav>
);

AccountNav.propTypes = {
  accounts: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  collapsed: PropTypes.bool.isRequired,
  headerClickHandler: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

export default AccountNav;
