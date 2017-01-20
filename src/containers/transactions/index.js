import { connect } from 'react-redux';

import Transactions from '../../components/transactions';

const mapStateProps = state => ({
  active: state.navigation.currentPanel === 'transactions',
});

export default connect(mapStateProps)(Transactions);
