'use strict';

import React from 'react';
import { connect } from 'react-redux';

import { AccountsHeader, AccountsList } from './accounts-nav';
import { closed } from '../../../lib/data/accounts';

const ClosedAccountsHeader = (() => {
  const mapStateProps = state => ({
    total: closed(state.accounts).size,
    type: 'Closed'
  });
  const mapDispatchProps = (dispatch, ownProps) => ({
    onClick() {
      alert(`clicked header`);
    }
  });
  return connect(mapStateProps, mapDispatchProps)(AccountsHeader);
})();

const ClosedAccountsList = (() => {
  const mapStateProps = state => ({
    accounts: closed(state.accounts).toJS()
  });
  return connect(mapStateProps, null)(AccountsList);
})();

export default () => (
  <nav>
    <ClosedAccountsHeader />
    <ClosedAccountsList />
  </nav>
);
