'use strict';

import { connect } from 'react-redux';

import { closed } from '../../../lib/data/accounts';
import ClosedAccountNav from '../../components/navigation/closed-account';

const mapStateProps = state => ({
  accounts: closed(state.accounts),
  truncated: state.navigation.truncated
});

export default connect(mapStateProps)(ClosedAccountNav);
