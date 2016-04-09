'use strict';

import { connect } from 'react-redux';

import { amountInAccount } from '../../../../lib/data/transactions';
import AccountLink from '../../../components/navigation/account/link';

const mapStateProps = (state, props) => ({
  total: amountInAccount(state.transactions, props.account),
});

const mapDispatchProps = (dispatch, props) => ({
  onClick() {
    alert('navigate to account');
  }
});

export default connect(mapStateProps, mapDispatchProps)(AccountLink);
