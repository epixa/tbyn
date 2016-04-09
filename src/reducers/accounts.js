'use strict';

import { empty, insert, update, remove } from '../../lib/data/accounts';

export default function accountsReducer(state = empty(), action) {
  switch (action.type) {
    case 'CREATE_ACCOUNT':
      return insert(state, action.account);
    case 'UPDATE_ACCOUNT':
      return update(state, action.account);
    case 'DELETE_ACCOUNT':
      return remove(state, action.account);
    default:
      return state;
  }
}
