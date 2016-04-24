'use strict';

import { connect } from 'react-redux';

import { toggleSidebar } from '../../actions/sidebar';
import ToggleSidebar from '../../components/sidebar/toggle';

const mapStateProps = (state) => ({
  collapsed: state.sidebar.collapsed
});

const mapDispatchProps = (dispatch, props) => ({
  onClick() {
    dispatch(toggleSidebar())
  }
});

export default connect(mapStateProps, mapDispatchProps)(ToggleSidebar);
