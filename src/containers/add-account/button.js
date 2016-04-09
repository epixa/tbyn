'use strict';

import { connect } from 'react-redux';

import AddAccountButton from '../../components/add-account/button';
import { showAddAccount } from '../../actions/accounts';

const mapDispatchProps = dispatch => ({
  onClick() {
    dispatch(showAddAccount());
  }
});

export default connect(null, mapDispatchProps)(AddAccountButton);
