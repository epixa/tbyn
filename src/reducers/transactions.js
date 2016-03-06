'use strict';

import { empty, insert, update, remove } from '../../lib/data/transactions';

export default function transactionsReducer(state = empty(), action) {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return insert(state, action.data);
    case 'UPDATE_TRANSACTION':
      return update(state, action.transaction);
    case 'DELETE_TRANSACTION':
      return remove(state, action.transaction);
    default:
      return state;
  }
}
