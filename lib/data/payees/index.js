import { fromJS } from 'immutable';
import * as schema from './schema';

export const STARTING_BALANCE_ID = '0';

/**
 * Returns a db with no payees
 */
export function empty() {
  return fromJS([
    { id: STARTING_BALANCE_ID, name: 'Starting Balance' },
  ]);
}

/**
 * Inserts the payee into the database
 * @throws if payee is not valid
 */
export function insert(payees, payeeData) {
  const payee = schema.cast(payeeData);
  return payees.push(payee);
}

/**
 * Updates the payee in the database
 * @throws if payee is not valid
 * @throws if no payee exists in database with that id
 */
export function update(payees, payeeData) {
  const payee = schema.cast(payeeData);
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
