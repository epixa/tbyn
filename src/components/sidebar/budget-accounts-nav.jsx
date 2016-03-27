'use strict';

import React from 'react';
import { connect } from 'react-redux';

import { AccountsHeader, AccountsList } from './accounts-nav';
import { onBudget } from '../../../lib/data/accounts';

const BudgetAccountsHeader = (() => {
  const mapStateProps = state => ({
    total: onBudget(state.accounts).size,
    type: 'On Budget'
  });
  const mapDispatchProps = (dispatch, ownProps) => ({
    onClick() {
      alert(`clicked header`);
    }
  });
  return connect(mapStateProps, mapDispatchProps)(AccountsHeader);
})();

const BudgetAccountsList = (() => {
  const mapStateProps = state => ({
    accounts: onBudget(state.accounts).toJS()
  });
  return connect(mapStateProps, null)(AccountsList);
})();

export default () => (
  <nav>
    <BudgetAccountsHeader />
    <BudgetAccountsList />
  </nav>
);
