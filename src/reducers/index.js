'use strict';

import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import accounts from './accounts';
import addAccount from './add-account';
import categories from './categories';
import payees from './payees';
import transactions from './transactions';

export default combineReducers({
  accounts,
  addAccount,
  categories,
  form,
  payees,
  transactions
});
