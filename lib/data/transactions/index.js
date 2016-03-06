import { fromJS } from 'immutable';
import * as schema from './schema';

/**
 * Returns a db with no transactions
 */
export function empty() {
  return fromJS([]);
}

/**
 * Gets all completed transactions from the database
 */
export function completed(transactions) {
  return transactions.filter(schema.isCompleted);
}

/**
 * Gets all completed transactions for the given account
 */
export function completedForAccount(transactions, account) {
  return forAccount(transactions, account).filter(schema.isCompleted);
}

/**
 * Gets all transactions for the given account
 */
export function forAccount(transactions, account) {
  return transactions.filter(t => schema.isForAccount(t, account));
}

/**
 * Inserts the transaction into the database
 * @throws if transaction is not valid
 */
export function insert(transactions, transaction) {
  transaction = schema.cast(transaction);
  return transactions.push(transaction);
}

/**
 * Updates the transaction in the database
 * @throws if transaction is not valid
 * @throws if no transaction exists in database with that id
 */
export function update(transactions, transaction) {
  transaction = schema.cast(transaction);
  const index = findTransactionIndex(transactions, transaction);
  return transactions.update(index, () => transaction);
}

/**
 * Deletes the given transaction from the database
 * @throws if no transaction exists in database with that id
 */
export function remove(transactions, transaction) {
  const index = findTransactionIndex(transactions, transaction);
  return transactions.delete(index);
}


/**
 * Finds the index of transaction in the transactions list in the database
 * @throws if no transaction exists with that id
 */
function findTransactionIndex(transactions, transaction) {
  const id = transaction.get('id');
  schema.assertValidId(id);
  const index = transactions.findIndex(t => t.get('id') === id);
  if (index === -1) {
    throw new Error(`Cannot find transaction by id "${id}"`);
  }
  return index;
}
