'use strict';

import { combineReducers } from 'redux';

import accounts from './accounts';
import categories from './categories';
import payees from './payees';
import transactions from './transactions';

export default combineReducers({
  accounts,
  categories,
  payees,
  transactions
});
