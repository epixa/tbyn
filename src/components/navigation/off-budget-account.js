import React, { PropTypes } from 'react';

import AccountNav from '../../containers/navigation/account/nav';

const OffBudgetAccountNav = ({ accounts, truncated }) => (
  <AccountNav accounts={accounts} type="off_budget">
    {truncated ? 'Off Budget Accts' : 'Off Budget Accounts'}
  </AccountNav>
);

OffBudgetAccountNav.propTypes = {
  accounts: PropTypes.object.isRequired,
  truncated: PropTypes.bool.isRequired,
};

export default OffBudgetAccountNav;
