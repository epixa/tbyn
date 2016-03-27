'use strict';

import React from 'react';
import { connect } from 'react-redux';

const BudgetLink = ({ onClick }) => (
  <a onClick={onClick}>
    Budget
  </a>
);

const mapDispatchProps = dispatch => ({
  onClick() {
    alert('show budget');
  }
});

export default connect(null, mapDispatchProps)(BudgetLink);
