'use strict';

import { connect } from 'react-redux';

import AccountNavHeader from '../../../components/navigation/account/nav-header';

const mapStateProps = state => ({
  truncated: state.navigation.truncated
});

const mapDispatchProps = (dispatch, props) => ({
  onClick() {
    alert(`clicked header`);
  }
});

export default connect(mapStateProps, mapDispatchProps)(AccountNavHeader);
