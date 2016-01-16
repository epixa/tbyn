import * as schema from './schema';

const DB_KEY = 'categories';

/**
 * Gets all categories from the database
 */
export function all(db) {
  return db.get(DB_KEY);
}

/**
 * Gets list of active categories from the database
 */
export function active(db) {
  return all(db).filter(schema.isActive);
}

/**
 * Gets list of active categories from the database
 */
export function inactive(db) {
  return all(db).filterNot(schema.isActive);
}

/**
 * Inserts the category into the database
 * @throws if category is not valid
 */
export function insert(db, category) {
  category = schema.cast(category);
  db = persist(db, categories => categories.push(category));
  return [db, category];
}

/**
 * Updates the category in the database
 * @throws if category is not valid
 * @throws if no category exists in database with that id
 */
export function update(db, category) {
  category = schema.cast(category);
  const index = findCategoryIndex(db, category);
  db = persist(db, categories => categories.update(index, () => category));
  return [db, category];
}

/**
 * Deletes the given category from the database
 * @throws if no category exists in database with that id
 */
export function remove(db, category) {
  const index = findCategoryIndex(db, category);
  return persist(db, categories => categories.delete(index))
}


/**
 * Updates the categories list in the database
 */
function persist(db, fn) {
  return db.updateIn([ DB_KEY ], fn);
}

/**
 * Finds the index of category in the categories list in the database
 * @throws if no category exists with that id
 */
function findCategoryIndex(db, category) {
  const id = category.get('id');
  schema.assertValidId(id);
  const index = all(db).findIndex(c => c.get('id') === id);
  if (index === -1) {
    throw new Error(`Cannot find category by id "${id}"`);
  }
  return index;
}
