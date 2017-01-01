import { connect } from 'react-redux';

import AddAccountButton from '../../components/add-account/button';
import { showAddAccount } from '../../actions/accounts';

const mapStateProps = state => ({
  truncated: state.addAccount.truncated,
});

const mapDispatchProps = dispatch => ({
  onClick() {
    dispatch(showAddAccount());
  },
});

export default connect(mapStateProps, mapDispatchProps)(AddAccountButton);
