'use strict';

import React from 'react';
import { connect } from 'react-redux';

const ReportsLink = ({ onClick }) => (
  <a onClick={onClick}>
    Reports
  </a>
);

const mapDispatchProps = dispatch => ({
  onClick() {
    alert('show reports');
  }
});

export default connect(null, mapDispatchProps)(ReportsLink);
