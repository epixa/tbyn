import { defaults, trim } from 'lodash';
import { fromJS } from 'immutable';

import { accounts } as '../account';
import { payees } as '../payee';

export function isInflow(transaction) {
  return transaction.amount >= 0;
}

export function isOutflow(transaction) {
  return transaction.amount < 0;
}

export function dollarAmount(transaction) {
  return "" + (transaction.amount / 1000);
}

export function isCompleted(transaction) {
  return transaction.completed;
}

export function isPending(transaction) {
  return !transaction.completed;
}

export function isForAccount(transaction, account) {
  return transaction.account === account.id;
}

export function account(accounts, transaction) {
  return accounts.find(a => a.id === transaction.account);
}

export function payee(payees, transaction) {
  return payees.find(p => p.id === transaction.payee);
}

export function cast(transaction, db) {
  transaction = defaults(transaction, {
    id: "",
    account: "",
    payee: "",
    date: "",
    memo: "",
    check: "",
    amount: 0,
    completed: false
  });

  transaction = fromJS(transaction);

  assertValidId(transaction.id);
  assertValidAccount(accounts(db), transaction.account);
  assertValidPayee(payees(db), transaction.payee);
  assertValidDate(transaction.date);
  assertValidMemo(transaction.memo);
  assertValidCheck(transaction.check);
  assertValidAmount(transaction.amount);
  assertValidCompleted(transaction.completed);

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
  const account = accounts.find(a => a.id === accountId);
  if (!account) {
    throw new Error(`Cannot find account identified by "${accountId}"`);
  }
}

export function assertValidPayee(payees, payeeId) {
  const payee = payees.find(p => p.id === payeeId);
  if (!payee(payees)) {
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
