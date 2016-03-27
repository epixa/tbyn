'use strict';

import React from 'react';
import { connect } from 'react-redux';

const NavLink = ({ onClick, name, total }) => (
  <li onClick={onClick}>
    { name }
    <span>{ total }</span>
  </li>
);

const AccountLink = (() => {
  const mapDispatchProps = (dispatch, ownProps) => ({
    onClick() {
      const { id, name } = ownProps;
      alert(`clicked account ${name} (${id})`);
    }
  });
  return connect(null, mapDispatchProps)(NavLink);
})();

export const AccountsList = ({ accounts }) => (
  <ul>
    {accounts.map(account =>
      <AccountLink
        key={account.id}
        {...account}
      />
    )}
  </ul>
);

export const AccountsHeader = ({ onClick, total, type }) => (
  <h1 onClick={onClick}>
    { type } Accounts
    <span>{ total }</span>
  </h1>
);
