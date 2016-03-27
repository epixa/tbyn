'use strict';

import React from 'react';
import { connect } from 'react-redux';

const ToggleSidebarButton = ({ onClick }) => (
  <a onClick={onClick}>
    Toggle
  </a>
);

const mapDispatchProps = dispatch => ({
  onClick() {
    alert('toggle sidebar');
  }
});

export default connect(null, mapDispatchProps)(ToggleSidebarButton);
