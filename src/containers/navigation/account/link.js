import { connect } from 'react-redux';

import { amountInAccount } from '../../../../lib/data/transactions';
import AccountLink from '../../../components/navigation/account/link';

const mapStateProps = (state, props) => ({
  total: amountInAccount(state.transactions, props.account),
  truncated: state.navigation.truncated,
});

const mapDispatchProps = () => ({
  onClick() {
    alert('navigate to account'); // eslint-disable-line no-alert
  },
});

export default connect(mapStateProps, mapDispatchProps)(AccountLink);
