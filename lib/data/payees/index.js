'use strict';

import * as schema from './schema';

const DB_KEY = 'payees';

/**
 * Gets all payees from the database
 */
export function all(db) {
  return db.get(DB_KEY);
}

/**
 * Inserts the payee into the database
 * @throws if payee is not valid
 */
export function insert(db, payee) {
  payee = schema.cast(payee);
  db = persist(db, payees => payees.push(payee));
  return [db, payee];
}

/**
 * Updates the payee in the database
 * @throws if payee is not valid
 * @throws if no payee exists in database with that id
 */
export function update(db, payee) {
  payee = schema.cast(payee);
  const index = findPayeeIndex(db, payee);
  db = persist(db, payees => payees.update(index, () => payee));
  return [db, payee];
}

/**
 * Deletes the given payee from the database
 * @throws if no payee exists in database with that id
 */
export function remove(db, payee) {
  const index = findPayeeIndex(db, payee);
  return persist(db, payees => payees.delete(index))
}


/**
 * Updates the payees list in the database
 */
function persist(db, fn) {
  return db.updateIn([ DB_KEY ], fn);
}

/**
 * Finds the index of payee in the payees list in the database
 * @throws if no payee exists with that id
 */
function findPayeeIndex(db, payee) {
  const id = payee.get('id');
  schema.assertValidId(id);
  const index = all(db).findIndex(p => p.get('id') === id);
  if (index === -1) {
    throw new Error(`Cannot find payee by id "${id}"`);
  }
  return index;
}
