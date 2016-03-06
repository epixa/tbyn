'use strict';

import { empty, insert } from '../../lib/data/payees';

export default function payeesReducer(state = empty(), action) {
  switch (action.type) {
    case 'ADD_PAYEE':
      return insert(state, action.data);
    default:
      return state;
  }
}
