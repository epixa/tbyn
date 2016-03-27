'use strict';

import React from 'react';
import { connect } from 'react-redux';

const AllAccountsLink = ({ onClick }) => (
  <a onClick={onClick}>
    All Accounts
  </a>
);

const mapDispatchProps = dispatch => ({
  onClick() {
    alert('show transactions for all accounts');
  }
});

export default connect(null, mapDispatchProps)(AllAccountsLink);
