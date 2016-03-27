'use strict';

import React from 'react';
import { connect } from 'react-redux';

import { AccountsHeader, AccountsList } from './accounts-nav';
import { onBudget } from '../../../lib/data/accounts';
import { amountInAccounts } from '../../../lib/data/transactions';

const BudgetAccountsHeader = (() => {
  const mapStateProps = state => ({
    total: amountInAccounts(state.transactions, onBudget(state.accounts)),
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
