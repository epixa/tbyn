import * as schema from './schema';

const DB_KEY = 'accounts';

/**
 * Gets all accounts from the database
 */
export function accounts(db) {
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
  return accounts(db).filter(schema.isOpen);
}

/**
 * Gets list of closed accounts from the database
 */
export function closed(db) {
  return accounts(db).filter(schema.isClosed);
}

/**
 * Inserts the account into the database
 * @throws if account is not valid
 */
export function insert(db, account) {
  account = schema.cast(account);
  return persist(db, accounts => accounts.push(account));
}

/**
 * Updates the account in the database
 * @throws if account is not valid
 * @throws if no account exists in database with that id
 */
export function update(db, account) {
  account = schema.cast(account);
  const index = findAccountIndex(account);
  return persist(db, accounts => accounts.update(index, account));
}

/**
 * Deletes the given account from the database
 * @throws if no account exists in database with that id
 */
export function delete(db, account) {
  const index = findAccountIndex(account);
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
  schema.assertValidId(account.id);
  const index = accounts(db).findIndex(a => a.id === account.id);
  if (index === -1) {
    throw new Error(`Cannot find account by id "${account.id}"`);
  }
  return index;
}
