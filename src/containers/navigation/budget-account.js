'use strict';

import { connect } from 'react-redux';

import { onBudget } from '../../../lib/data/accounts';
import BudgetAccountNav from '../../components/navigation/budget-account';

const mapStateProps = state => ({
  accounts: onBudget(state.accounts),
  truncated: state.navigation.truncated
});

export default connect(mapStateProps)(BudgetAccountNav);
