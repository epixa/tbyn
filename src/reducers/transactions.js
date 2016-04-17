'use strict';

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

function dateForStore(date = new Date()) {
  const { day, month, year } = dateObj(date);
  return `${year}-${dateSegment(month)}-${dateSegment(day)}`;
}

function dateObj(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // month is 0 indexed
  const day = date.getDate();
  return { day, month, year };
}

function toCents(amount) {
  return parseFloat(amount).toFixed(2) * 100;
}

function dateSegment(val) {
  return val < 10 ? `0${val}` : `${val}`;
}
