import React, { PropTypes } from 'react';

import AccountNav from '../../containers/navigation/account/nav';

const BudgetAccountNav = ({ accounts, truncated }) => (
  <AccountNav accounts={accounts}>
    {truncated ? 'Budget Accts' : 'Budget Accounts'}
  </AccountNav>
);

BudgetAccountNav.propTypes = {
  accounts: PropTypes.object.isRequired,
  truncated: PropTypes.bool.isRequired,
};

export default BudgetAccountNav;
