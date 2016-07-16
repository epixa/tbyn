import React, { PropTypes } from 'react';

import AccountNav from '../../containers/navigation/account/nav';

const OffBudgetAccountNav = ({ accounts }) => (
  <AccountNav accounts={accounts}>
    Off Budget Accounts
  </AccountNav>
);

OffBudgetAccountNav.propTypes = {
  accounts: PropTypes.object.isRequired,
};

export default OffBudgetAccountNav;
