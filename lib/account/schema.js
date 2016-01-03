import { defaults, includes, trim } from 'lodash';
import freeze from '../deep-freeze';

export const enum = freeze({
  types: {
    CHECKING    = 'checking',
    SAVINGS     = 'savings',
    CREDIT_CARD = 'credit_card'
  }
});

export function isOnBudget(account) {
  return account.on_budget;
}

export function isOffBudget(account) {
  return !account.on_budget;
}

export function isOpen(account) {
  return !account.closed;
}

export function isClosed(account) {
  return account.closed;
}

export function cast(account) {
  account = defaults(account, {
    id: "",
    name: "",
    type: enum.types.CHECKING,
    on_budget: true,
    closed: false
  });

  account = freeze(account);

  assertValidId(account.id);
  assertValidName(account.name);
  assertValidType(account.type);
  assertValidOnBudget(account.on_budget);
  assertValidClosed(account.closed);

  return account;
}

export function assertValidId(id) {
  const type = typeof id;
  if (type !== 'string') {
    throw new TypeError(`Account id must be a string, ${type} given`);
  }
  if (trim(id) === "") {
    throw new Error(`Account id cannot be empty`);
  }
}

export function assertValidName(name) {
  const type = typeof name;
  if (type !== 'string') {
    throw new TypeError(`Account name must be a string, ${type} given`);
  }
  if (trim(name) === "") {
    throw new Error(`Account name cannot be empty`);
  }
}

export function assertValidType(type) {
  if (!includes(enum.types.CHECKING, type)) {
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
