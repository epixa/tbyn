import { trim } from 'lodash';
import { Map as immutableMap } from 'immutable';

import { all as allAccounts } from '../accounts';
import { all as allPayees } from '../payees';

export const defaults = Object.freeze({
  id: "",
  account: "",
  payee: "",
  date: "",
  memo: "",
  check: "",
  amount: 0,
  completed: false
});

export function isInflow(transaction) {
  return transaction.get('amount') >= 0;
}

export function isOutflow(transaction) {
  return transaction.get('amount') < 0;
}

export function dollarAmount(transaction) {
  return "" + (transaction.get('amount') / 100);
}

export function isCompleted(transaction) {
  return transaction.get('completed');
}

export function isPending(transaction) {
  return !transaction.get('completed');
}

export function isForAccount(transaction, account) {
  return transaction.get('account') === account.get('id');
}

export function account(accounts, transaction) {
  return accounts.find(a => a.get('id') === transaction.get('account'));
}

export function payee(payees, transaction) {
  return payees.find(p => p.get('id') === transaction.get('payee'));
}

export function cast(transaction, db) {
  transaction = immutableMap(defaults).merge(transaction);

  assertValidId(transaction.get('id'));
  assertValidAccount(allAccounts(db), transaction.get('account'));
  assertValidPayee(allPayees(db), transaction.get('payee'));
  assertValidDate(transaction.get('date'));
  assertValidMemo(transaction.get('memo'));
  assertValidCheck(transaction.get('check'));
  assertValidAmount(transaction.get('amount'));
  assertValidCompleted(transaction.get('completed'));

  return transaction;
}

export function assertValidId(id) {
  const type = typeof id;
  if (type !== 'string') {
    throw new TypeError(`Transaction id must be a string, ${type} given`);
  }
  if (trim(id) === "") {
    throw new Error(`Transaction id cannot be empty`);
  }
}

export function assertValidAccount(accounts, accountId) {
  if (accountId === "") return;

  const account = accounts.find(a => a.get('id') === accountId);
  if (!account) {
    throw new Error(`Cannot find account identified by "${accountId}"`);
  }
}

export function assertValidPayee(payees, payeeId) {
  if (payeeId === "") return;

  const payee = payees.find(p => p.get('id') === payeeId);
  if (!payee) {
    throw new Error(`Cannot find payee identified by "${payeeId}"`);
  }
}

export function assertValidDate(date) {
  const type = typeof date;
  if (type !== 'string') {
    throw new TypeError(`Transaction date must be a string, ${type} given`);
  }
  // todo: validate date format
}

export function assertValidMemo(memo) {
  const type = typeof memo;
  if (type !== 'string') {
    throw new TypeError(`Transaction memo must be a string, ${type} given`);
  }
}

export function assertValidCheck(check) {
  const type = typeof check;
  if (type !== 'string') {
    throw new TypeError(`Transaction check must be a string, ${type} given`);
  }
}

export function assertValidAmount(amount) {
  if (!Number.isInteger(amount)) {
    throw new TypeError(`Transaction amount must be an integer, value of "${amount}" given`);
  }
}

export function assertValidCompleted(flag) {
  const type = typeof flag;
  if (type !== 'boolean') {
    throw new TypeError(`Transaction completed must be a boolean, ${type} given`);
  }
}
