'use strict';

export const HIDE_ADD_ACCOUNT = 'HIDE_ADD_ACCOUNT';
export const SHOW_ADD_ACCOUNT = 'SHOW_ADD_ACCOUNT';
export const CHANGE_ADD_ACCOUNT_TYPE = 'CHANGE_ADD_ACCOUNT_TYPE';
export const RECEIVE_ACCOUNTS = 'RECEIVE_ACCOUNTS';
export const SELECT_ACCOUNT = 'SELECT_ACCOUNT';
export const CREATE_ACCOUNT = 'CREATE_ACCOUNT';
export const CLOSE_ACCOUNT = 'CLOSE_ACCOUNT';
export const REOPEN_ACCOUNT = 'REOPEN_ACCOUNT';
export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';

export function hideAddAccount() {
  return {
    type: HIDE_ADD_ACCOUNT
  };
}

export function showAddAccount() {
  return {
    type: SHOW_ADD_ACCOUNT
  };
}

export function changeAddAccountType(newAccountType) {
  return {
    newAccountType,
    type: CHANGE_ADD_ACCOUNT_TYPE
  };
}

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

let id = 0;
export function createAccount(account) {
  return {
    account: { id: String(++id), ...account },
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
