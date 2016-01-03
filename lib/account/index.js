import { assign, flow, filter, find } from 'lodash';
import * as schema from './schema';

export function all(db) {
  return db.accounts;
}

export function findOne(db, query) {
  return find(all(db), query);
}

export function findAll(db, query) {
  return filter(all(db), query);
}

export function onBudget(db) {
  const fn = flow(schema.isOpen, schema.isOnBudget);
  return findAll(db, isOnBudget);
}

export function offBudget(db) {
  const fn = flow(schema.isOpen, schema.isOffBudget);
  return findAll(db, fn);
}

export function closed(db) {
  return findAll(db, schema.isClosed);
}

export function insert(db, account) {
  account = schema.cast(account);
  const accounts = all(db).concat([ account ]);
  return setAccounts(accounts);
}

export function update(db, account) {
  account = schema.cast(account);
  // todo: figure out how to make delete/update more DRY
  const index = findAccountIndex(account);
  const accounts = all(db).concat([]);
  accounts.splice(index, 1, account);
  return setAccounts(accounts);
}

export function delete(db, account) {
  // todo: figure out how to make delete/update more DRY
  const index = findAccountIndex(account);
  const accounts = all(db).concat([]);
  accounts.splice(index, 1);
  return setAccounts(accounts);
}

function setAccounts(db, accounts) {
  return assign({}, db, { accounts });
}

function findAccountIndex(db, account) {
  schema.assertValidId(account.id);
  const index = findIndex(all(db), { id: account.id });
  if (index === -1) {
    throw new Error(`Cannot find account by id "${account.id}"`);
  }
  return index;
}
