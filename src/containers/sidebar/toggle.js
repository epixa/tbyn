'use strict';

import { connect } from 'react-redux';

import ToggleSidebar from '../../components/sidebar/toggle';

const mapDispatchProps = (dispatch, props) => ({
  onClick() {
    alert('toggle sidebar');
  }
});

export default connect(null, mapDispatchProps)(ToggleSidebar);
