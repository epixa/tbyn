'use strict';

import moment from 'moment';

import { STARTING_BALANCE_ID } from '../../lib/data/payees';
import { empty, insert, update, remove } from '../../lib/data/transactions';

export default function transactionsReducer(state = empty(), action) {
  switch (action.type) {
    case 'CREATE_ACCOUNT':
      return defaultBalance(state, action);
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

export function defaultBalance(state, data) {
  const transaction = {
    ...data.transaction,
    account: data.account.id,
    completed: true,
    date: dateForStore(data.transaction.date),
    payee: STARTING_BALANCE_ID
  };
  transaction.amount = toCents(transaction.amount);
  return insert(state, transaction);
}

function dateForStore(date) {
  return moment(date).format('YYYY-MM-DD');
}

function toCents(amount) {
  return Math.round(parseFloat(amount) * 100);
}
