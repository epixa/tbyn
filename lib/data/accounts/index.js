'use strict';

import * as schema from './schema';

const DB_KEY = 'accounts';

/**
 * Gets all accounts from the database
 */
export function all(db) {
  return db.get(DB_KEY);
}

/**
 * Gets list of open, on-budget accounts from the database
 */
export function onBudget(db) {
  return open(db).filter(schema.isOnBudget);
}

/**
 * Gets list of open, off-budget accounts from the database
 */
export function offBudget(db) {
  return open(db).filter(schema.isOffBudget);
}

/**
 * Gets list of open accounts from the database
 */
export function open(db) {
  return all(db).filter(schema.isOpen);
}

/**
 * Gets list of closed accounts from the database
 */
export function closed(db) {
  return all(db).filter(schema.isClosed);
}

/**
 * Inserts the account into the database
 * @throws if account is not valid
 */
export function insert(db, account) {
  account = schema.cast(account);
  db = persist(db, accounts => accounts.push(account));
  return [db, account];
}

/**
 * Updates the account in the database
 * @throws if account is not valid
 * @throws if no account exists in database with that id
 */
export function update(db, account) {
  account = schema.cast(account);
  const index = findAccountIndex(db, account);
  db = persist(db, accounts => accounts.update(index, () => account));
  return [db, account];
}

/**
 * Deletes the given account from the database
 * @throws if no account exists in database with that id
 */
export function remove(db, account) {
  const index = findAccountIndex(db, account);
  return persist(db, accounts => accounts.delete(index))
}


/**
 * Updates the accounts list in the database
 */
function persist(db, fn) {
  return db.updateIn([ DB_KEY ], fn);
}

/**
 * Finds the index of account in the accounts list in the database
 * @throws if no account exists with that id
 */
function findAccountIndex(db, account) {
  const id = account.get('id');
  schema.assertValidId(id);
  const index = all(db).findIndex(a => a.get('id') === id);
  if (index === -1) {
    throw new Error(`Cannot find account by id "${id}"`);
  }
  return index;
}
