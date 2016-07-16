export const CANCEL_ADD_ACCOUNT = 'CANCEL_ADD_ACCOUNT';
export const SHOW_ADD_ACCOUNT = 'SHOW_ADD_ACCOUNT';
export const CHANGE_ADD_ACCOUNT_TYPE = 'CHANGE_ADD_ACCOUNT_TYPE';
export const RECEIVE_ACCOUNTS = 'RECEIVE_ACCOUNTS';
export const SELECT_ACCOUNT = 'SELECT_ACCOUNT';
export const CREATE_ACCOUNT = 'CREATE_ACCOUNT';
export const CLOSE_ACCOUNT = 'CLOSE_ACCOUNT';
export const REOPEN_ACCOUNT = 'REOPEN_ACCOUNT';
export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';

export function cancelAddAccount() {
  return {
    type: CANCEL_ADD_ACCOUNT,
  };
}

export function showAddAccount() {
  return {
    type: SHOW_ADD_ACCOUNT,
  };
}

export function changeAddAccountType(newAccountType) {
  return {
    newAccountType,
    type: CHANGE_ADD_ACCOUNT_TYPE,
  };
}

export function receiveAccounts(accounts) {
  return {
    accounts,
    type: RECEIVE_ACCOUNTS,
  };
}

export function selectAccount(account) {
  return {
    account,
    type: SELECT_ACCOUNT,
  };
}

let aid = 0;
let tid = 0;
export function createAccount(data) {
  const account = { ...data };
  delete account.balance;
  delete account.date;

  const transaction = { amount: data.balance, date: data.date };

  return {
    account: { id: String(++aid), ...account },
    transaction: { id: String(++tid), ...transaction },
    type: CREATE_ACCOUNT,
  };
}

export function closeAccount(account) {
  return {
    account,
    type: CLOSE_ACCOUNT,
  };
}

export function reopenAccount(account) {
  return {
    account,
    type: REOPEN_ACCOUNT,
  };
}

export function deleteAccount(account) {
  return {
    account,
    type: DELETE_ACCOUNT,
  };
}
