import { includes, trim } from 'lodash';
import { Map as immutableMap } from 'immutable';

export const types = Object.freeze({
  CHECKING: 'checking',
  SAVINGS: 'savings',
  CREDIT_CARD: 'credit_card',
  CASH: 'cash',
  OTHER_CREDIT: 'other_credit',
  PAYPAL: 'paypal',
  MERCHANT: 'merchant',
  INVESTMENT: 'investment',
  MORTGAGE: 'mortgage',
  OTHER_ASSET: 'other_asset',
  OTHER_LOAN: 'other_loan',
});

export const defaults = Object.freeze({
  id: '',
  name: '',
  type: types.CHECKING,
  on_budget: true,
  closed: false,
});

export function isOnBudget(account) {
  return account.get('on_budget');
}

export function isOffBudget(account) {
  return !account.get('on_budget');
}

export function isOpen(account) {
  return !account.get('closed');
}

export function isClosed(account) {
  return account.get('closed');
}

export function cast(accountData) {
  const account = immutableMap(defaults).merge(accountData);

  assertValidId(account.get('id'));
  assertValidName(account.get('name'));
  assertValidType(account.get('type'));
  assertValidOnBudget(account.get('on_budget'));
  assertValidClosed(account.get('closed'));

  return account;
}

export function assertValidId(id) {
  const type = typeof id;
  if (type !== 'string') {
    throw new TypeError(`Account id must be a string, ${type} given`);
  }
  if (trim(id) === '') {
    throw new Error('Account id cannot be empty');
  }
}

export function assertValidName(name) {
  const type = typeof name;
  if (type !== 'string') {
    throw new TypeError(`Account name must be a string, ${type} given`);
  }
  if (trim(name) === '') {
    throw new Error('Account name cannot be empty');
  }
}

export function assertValidType(type) {
  if (!includes(types, type)) {
    throw new Error(`"${type}" is not a valid account type`);
  }
}

export function assertValidOnBudget(onBudget) {
  const type = typeof onBudget;
  if (type !== 'boolean') {
    throw new TypeError(`Account on_budget must be a boolean, ${type} given`);
  }
}

export function assertValidClosed(closed) {
  const type = typeof closed;
  if (type !== 'boolean') {
    throw new TypeError(`Account closed must be a boolean, ${type} given`);
  }
}
