import React, { PropTypes } from 'react';

import AccountNav from '../../containers/navigation/account/nav';

const BudgetAccountNav = ({ accounts }) => (
  <AccountNav accounts={accounts}>
    Budget Accounts
  </AccountNav>
);

BudgetAccountNav.propTypes = {
  accounts: PropTypes.object.isRequired,
};

export default BudgetAccountNav;
