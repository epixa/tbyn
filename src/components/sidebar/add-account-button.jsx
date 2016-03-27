'use strict';

import React from 'react';
import { connect } from 'react-redux';

const AddAccountButton = ({ onClick }) => (
  <button onClick={onClick}>
    Add Account
  </button>
);

const mapDispatchProps = dispatch => ({
  onClick() {
    alert('add account');
  }
});

export default connect(null, mapDispatchProps)(AddAccountButton);
