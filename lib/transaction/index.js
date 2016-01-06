import * as schema from './schema';

const DB_KEY = 'transactions';

/**
 * Gets all transactions from the database
 */
export function transactions(db) {
  return db.get(DB_KEY);
}

/**
 * Gets all completed transactions from the database
 */
export function completed(db) {
  return transactions(db).filter(schema.isCompleted);
}

/**
 * Gets all completed transactions for the given account
 */
export function completedForAccount(db, account) {
  return forAccount(db, account).filter(schema.isCompleted);
}

/**
 * Gets all transactions for the given account
 */
export function forAccount(db, account) {
  return transactions(db).filter(t => schema.isForAccount(t, account));
}

/**
 * Inserts the transaction into the database
 * @throws if transaction is not valid
 */
export function insert(db, transaction) {
  transaction = schema.cast(transaction, db);
  return persist(db, transactions => transactions.push(transaction));
}

/**
 * Updates the transaction in the database
 * @throws if transaction is not valid
 * @throws if no transaction exists in database with that id
 */
export function update(db, transaction) {
  transaction = schema.cast(transaction, db);
  const index = findTransactionIndex(transaction);
  return persist(db, transactions => transactions.update(index, transaction));
}

/**
 * Deletes the given transaction from the database
 * @throws if no transaction exists in database with that id
 */
export function delete(db, transaction) {
  const index = findTransactionIndex(transaction);
  return persist(db, transactions => transactions.delete(index))
}


/**
 * Updates the transactions list in the database
 */
function persist(db, fn) {
  return db.updateIn([ DB_KEY ], fn);
}

/**
 * Finds the index of transaction in the transactions list in the database
 * @throws if no transaction exists with that id
 */
function findTransactionIndex(db, transaction) {
  schema.assertValidId(transaction.id);
  const index = transactions(db).findIndex(a => a.id === transaction.id);
  if (index === -1) {
    throw new Error(`Cannot find transaction by id "${transaction.id}"`);
  }
  return index;
}
