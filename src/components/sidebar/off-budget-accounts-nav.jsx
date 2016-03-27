'use strict';

import React from 'react';
import { connect } from 'react-redux';

import { AccountsHeader, AccountsList } from './accounts-nav';
import { offBudget } from '../../../lib/data/accounts';

const OffBudgetAccountsHeader = (() => {
  const mapStateProps = state => ({
    total: offBudget(state.accounts).size,
    type: 'Off Budget'
  });
  const mapDispatchProps = (dispatch, ownProps) => ({
    onClick() {
      alert(`clicked header`);
    }
  });
  return connect(mapStateProps, mapDispatchProps)(AccountsHeader);
})();

const OffBudgetAccountsList = (() => {
  const mapStateProps = state => ({
    accounts: offBudget(state.accounts).toJS()
  });
  return connect(mapStateProps, null)(AccountsList);
})();

export default () => (
  <nav>
    <OffBudgetAccountsHeader />
    <OffBudgetAccountsList />
  </nav>
);
