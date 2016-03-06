'use strict';

import * as schema from './schema';

/**
 * Inserts the payee into the database
 * @throws if payee is not valid
 */
export function insert(payees, payee) {
  payee = schema.cast(payee);
  return payees.push(payee);
}

/**
 * Updates the payee in the database
 * @throws if payee is not valid
 * @throws if no payee exists in database with that id
 */
export function update(payees, payee) {
  payee = schema.cast(payee);
  const index = findPayeeIndex(payees, payee);
  return payees.update(index, () => payee);
}

/**
 * Deletes the given payee from the database
 * @throws if no payee exists in database with that id
 */
export function remove(payees, payee) {
  const index = findPayeeIndex(payees, payee);
  return payees.delete(index);
}


/**
 * Finds the index of payee in the payees list in the database
 * @throws if no payee exists with that id
 */
function findPayeeIndex(payees, payee) {
  const id = payee.get('id');
  schema.assertValidId(id);
  const index = payees.findIndex(p => p.get('id') === id);
  if (index === -1) {
    throw new Error(`Cannot find payee by id "${id}"`);
  }
  return index;
}
