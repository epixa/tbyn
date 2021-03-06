import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import accounts from './accounts';
import addAccount from './add-account';
import categories from './categories';
import modals from './modals';
import navigation from './navigation';
import payees from './payees';
import transactions from './transactions';
import sidebar from './sidebar';

export default combineReducers({
  accounts,
  addAccount,
  categories,
  form,
  modals,
  navigation,
  payees,
  transactions,
  sidebar,
});
