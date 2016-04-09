'use strict';

import { connect } from 'react-redux';

import AccountNavHeader from '../../../components/navigation/account/nav-header';

const mapDispatchProps = (dispatch, props) => ({
  onClick() {
    alert(`clicked header`);
  }
});

export default connect(null, mapDispatchProps)(AccountNavHeader);
