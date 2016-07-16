import React, { PropTypes } from 'react';

import AccountNav from '../../containers/navigation/account/nav';

const ClosedAccountNav = ({ accounts, truncated }) => (
  <AccountNav accounts={accounts}>
    {truncated ? 'Closed Accts' : 'Closed Accounts'}
  </AccountNav>
);

ClosedAccountNav.propTypes = {
  accounts: PropTypes.object.isRequired,
  truncated: PropTypes.bool.isRequired,
};

export default ClosedAccountNav;
