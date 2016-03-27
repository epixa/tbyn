'use strict';

import React from 'react';
import { connect } from 'react-redux';

import { amountInAccount } from '../../../lib/data/transactions';

const NavLink = ({ onClick, name, total }) => (
  <li onClick={onClick}>
    { name }
    <span>{ total }</span>
  </li>
);

const AccountLink = (() => {
  const mapStateProps = (state, { account }) => ({
    total: amountInAccount(state.transactions, account),
    ...account.toJS()
  });
  const mapDispatchProps = (dispatch, { id, name }) => ({
    onClick() {
      alert(`clicked account ${name} (${id})`);
    }
  });
  return connect(mapStateProps, mapDispatchProps)(NavLink);
})();

export const AccountsList = ({ accounts }) => (
  <ul>
    {accounts.map(account =>
      <AccountLink key={account.get('id')} account={account} />
    )}
  </ul>
);

export const AccountsHeader = ({ onClick, total, type }) => (
  <h1 onClick={onClick}>
    { type } Accounts
    <span>{ total }</span>
  </h1>
);
