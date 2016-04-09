'use strict';

import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import accounts from './accounts';
import categories from './categories';
import payees from './payees';
import transactions from './transactions';
import ui from './ui';

export default combineReducers({
  accounts,
  categories,
  form,
  payees,
  transactions,
  ui
});
