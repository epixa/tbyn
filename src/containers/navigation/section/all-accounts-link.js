import { connect } from 'react-redux';

import { navigateToTransactions } from '../../../actions/navigation';
import { amountInAccounts } from '../../../../lib/data/transactions';

import AllAccountsLink from '../../../components/navigation/section/all-accounts-link';

const mapStateProps = state => ({
  total: amountInAccounts(state.transactions, state.accounts),
  truncated: state.navigation.truncated,
});

const mapDispatchProps = dispatch => ({
  onClick() {
    dispatch(navigateToTransactions());
  },
});

export default connect(mapStateProps, mapDispatchProps)(AllAccountsLink);
