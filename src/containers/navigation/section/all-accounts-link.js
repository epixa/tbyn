'use strict';

import { connect } from 'react-redux';

import AllAccountsLink from '../../../components/navigation/section/all-accounts-link';

const mapStateProps = (state) => ({
  truncated: state.navigation.truncated
});

const mapDispatchProps = (dispatch, props) => ({
  onClick() {
    alert('navigate to transactions for all accounts');
  }
});

export default connect(mapStateProps, mapDispatchProps)(AllAccountsLink);
