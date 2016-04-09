'use strict';

import React from 'react';
import { connect } from 'react-redux';

import { showAddAccount } from '../../actions/accounts';

const AddAccountButton = ({ onClick }) => (
  <button onClick={onClick}>
    Add Account
  </button>
);

const mapStateProps = state => {
  const { showAddAccount } = state.ui;
  return { showAddAccount };
};

const mapDispatchProps = dispatch => ({
  onClick() {
    dispatch(showAddAccount());
  }
});

export default connect(mapStateProps, mapDispatchProps)(AddAccountButton);
