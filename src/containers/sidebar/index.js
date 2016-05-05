'use strict';

import { connect } from 'react-redux';

import Sidebar from '../../components/sidebar';

const mapStateProps = state => {
  return { collapsed: state.sidebar.collapsed };
};

export default connect(mapStateProps)(Sidebar);
