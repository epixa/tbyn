import { connect } from 'react-redux';

import { navigateToTransactions } from '../../../actions/navigation';
import AllAccountsLink from '../../../components/navigation/section/all-accounts-link';

const mapStateProps = state => ({
  truncated: state.navigation.truncated,
});

const mapDispatchProps = dispatch => ({
  onClick() {
    dispatch(navigateToTransactions());
  },
});

export default connect(mapStateProps, mapDispatchProps)(AllAccountsLink);
