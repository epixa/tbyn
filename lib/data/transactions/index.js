import * as schema from './schema';

const DB_KEY = 'transactions';

/**
 * Gets all transactions from the database
 */
export function all(db) {
  return db.get(DB_KEY);
}

/**
 * Gets all completed transactions from the database
 */
export function completed(db) {
  return all(db).filter(schema.isCompleted);
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
  return all(db).filter(t => schema.isForAccount(t, account));
}

/**
 * Inserts the transaction into the database
 * @throws if transaction is not valid
 */
export function insert(db, transaction) {
  transaction = schema.cast(transaction, db);
  db = persist(db, transactions => transactions.push(transaction));
  return [db, transaction];
}

/**
 * Updates the transaction in the database
 * @throws if transaction is not valid
 * @throws if no transaction exists in database with that id
 */
export function update(db, transaction) {
  transaction = schema.cast(transaction, db);
  const index = findTransactionIndex(db, transaction);
  db = persist(db, transactions => transactions.update(index, () => transaction));
  return [db, transaction];
}

/**
 * Deletes the given transaction from the database
 * @throws if no transaction exists in database with that id
 */
export function remove(db, transaction) {
  const index = findTransactionIndex(db, transaction);
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
  const id = transaction.get('id');
  schema.assertValidId(id);
  const index = all(db).findIndex(t => t.get('id') === id);
  if (index === -1) {
    throw new Error(`Cannot find transaction by id "${id}"`);
  }
  return index;
}
