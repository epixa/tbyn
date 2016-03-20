'use strict';

export const RECEIVE_TRANSACTIONS = 'RECEIVE_TRANSACTIONS';
export const SELECT_TRANSACTION = 'SELECT_TRANSACTION';
export const CREATE_TRANSACTION = 'CREATE_TRANSACTION';
export const DELETE_TRANSACTION = 'DELETE_TRANSACTION';

export const SELECTING_TRANSACTION_PAYEE = 'SELECTING_TRANSACTION_PAYEE';
export const UPDATE_TRANSACTION_PAYEE = 'UPDATE_TRANSACTION_PAYEE';
export const SELECTING_TRANSACTION_CATEGORY = 'SELECTING_TRANSACTION_CATEGORY';
export const UPDATE_TRANSACTION_CATEGORY = 'UPDATE_TRANSACTION_CATEGORY';

export function receiveTransactions(transactions) {
  return {
    transactions,
    type: RECEIVE_TRANSACTIONS
  };
}

export function selectTransaction(transaction) {
  return {
    transaction,
    type: SELECT_TRANSACTION
  };
}

export function createTransaction(transaction) {
  return {
    transaction,
    type: CREATE_TRANSACTION
  };
}

export function deleteTransaction(transaction) {
  return {
    transaction,
    type: DELETE_TRANSACTION
  };
}

export function selectingPayee(transaction) {
  return {
    transaction,
    type: SELECTING_TRANSACTION_PAYEE
  };
}

export function updatePayee(transaction, payee) {
  return {
    payee,
    transaction,
    type: UPDATE_TRANSACTION_PAYEE
  };
}

export function selectingCategory(transaction) {
  return {
    transaction,
    type: SELECTING_TRANSACTION_CATEGORY
  };
}

export function updateCategory(transaction, category) {
  return {
    category,
    transaction,
    type: UPDATE_TRANSACTION_CATEGORY
  };
}
