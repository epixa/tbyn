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
 * Gets the total amount of all transactions in a given account
 */
export function amountInAccount(transactions, account) {
  return forAccount(transactions, account).reduce((total, transaction) => {
    return total + transaction.get('amount');
  }, 0);
}

/**
 * Gets the total amount of all transactions in all of the given accounts
 */
export function amountInAccounts(transactions, accounts) {
  return accounts.reduce((total, account) => {
    return total + amountInAccount(transactions, account);
  }, 0);
}

/**
 * Inserts the transaction into the database
 * @throws if transaction is not valid
 */
export function insert(transactions, transactionData) {
  const transaction = schema.cast(transactionData);
  return transactions.push(transaction);
}

/**
 * Updates the transaction in the database
 * @throws if transaction is not valid
 * @throws if no transaction exists in database with that id
 */
export function update(transactions, transactionData) {
  const transaction = schema.cast(transactionData);
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
