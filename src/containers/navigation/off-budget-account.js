'use strict';

import { connect } from 'react-redux';

import { offBudget } from '../../../lib/data/accounts';
import OffBudgetAccountNav from '../../components/navigation/off-budget-account';

const mapStateProps = state => ({
  accounts: offBudget(state.accounts)
});

export default connect(mapStateProps)(OffBudgetAccountNav);
