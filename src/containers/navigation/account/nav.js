'use strict';

import { connect } from 'react-redux';

import { amountInAccounts } from '../../../../lib/data/transactions';
import AccountNav from '../../../components/navigation/account/nav';

const mapStateProps = (state, props) => ({
  total: amountInAccounts(state.transactions, props.accounts),
});

export default connect(mapStateProps)(AccountNav);
