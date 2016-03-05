'use strict';

import * as schema from './schema';
import { fromJS } from 'immutable';

const DB_KEY = 'accounts';

/**
 * Returns a db with no accounts
 */
export function empty() {
  return fromJS([]);
}

/**
 * Gets all accounts from the database
 * todo: remove once transactions no longer depends on it
 */
export function all(db) {
  return db.get(DB_KEY);
}

/**
 * Gets list of open, on-budget accounts from the database
 */
export function onBudget(accounts) {
  return open(accounts).filter(schema.isOnBudget);
}

/**
 * Gets list of open, off-budget accounts from the database
 */
export function offBudget(accounts) {
  return open(accounts).filter(schema.isOffBudget);
}

/**
 * Gets list of open accounts from the database
 */
export function open(accounts) {
  return accounts.filter(schema.isOpen);
}

/**
 * Gets list of closed accounts from the database
 */
export function closed(accounts) {
  return accounts.filter(schema.isClosed);
}

/**
 * Inserts the account into the database
 * @throws if account is not valid
 */
export function insert(accounts, account) {
  account = schema.cast(account);
  return accounts.push(account);
}

/**
 * Updates the account in the database
 * @throws if account is not valid
 * @throws if no account exists in database with that id
 */
export function update(accounts, account) {
  account = schema.cast(account);
  const index = findAccountIndex(accounts, account);
  return accounts.update(index, () => account);
}

/**
 * Deletes the given account from the database
 * @throws if no account exists in database with that id
 */
export function remove(accounts, account) {
  const index = findAccountIndex(accounts, account);
  return accounts.delete(index);
}


/**
 * Finds the index of account in the accounts list in the database
 * @throws if no account exists with that id
 */
function findAccountIndex(accounts, account) {
  const id = account.get('id');
  schema.assertValidId(id);
  const index = accounts.findIndex(a => a.get('id') === id);
  if (index === -1) {
    throw new Error(`Cannot find account by id "${id}"`);
  }
  return index;
}
