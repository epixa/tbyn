'use strict';

export const RECEIVE_ACCOUNTS = 'RECEIVE_ACCOUNTS';
export const SELECT_ACCOUNT = 'SELECT_ACCOUNT';
export const CREATE_ACCOUNT = 'CREATE_ACCOUNT';
export const CLOSE_ACCOUNT = 'CLOSE_ACCOUNT';
export const REOPEN_ACCOUNT = 'REOPEN_ACCOUNT';
export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';

export function receiveAccounts(accounts) {
  return {
    accounts,
    type: RECEIVE_ACCOUNTS
  };
}

export function selectAccount(account) {
  return {
    account,
    type: SELECT_ACCOUNT
  };
}

export function createAccount(account) {
  return {
    account,
    type: CREATE_ACCOUNT
  };
}

export function closeAccount(account) {
  return {
    account,
    type: CLOSE_ACCOUNT
  };
}

export function reopenAccount(account) {
  return {
    account,
    type: REOPEN_ACCOUNT
  };
}

export function deleteAccount(account) {
  return {
    account,
    type: DELETE_ACCOUNT
  };
}
