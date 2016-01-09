import * as schema from './schema';

const DB_KEY = 'categories';

/**
 * Gets all categories from the database
 */
export function categories(db) {
  return db.get(DB_KEY);
}

/**
 * Gets list of active categories from the database
 */
export function active(db) {
  return categories(db).filter(schema.isActive);
}

/**
 * Gets list of active categories from the database
 */
export function inactive(db) {
  return categories(db).filterNot(schema.isActive);
}

/**
 * Inserts the category into the database
 * @throws if category is not valid
 */
export function insert(db, category) {
  category = schema.cast(category);
  return persist(db, categories => categories.push(category));
}

/**
 * Updates the category in the database
 * @throws if category is not valid
 * @throws if no category exists in database with that id
 */
export function update(db, category) {
  category = schema.cast(category);
  const index = findCategoryIndex(category);
  return persist(db, categories => categories.update(index, category));
}

/**
 * Deletes the given category from the database
 * @throws if no category exists in database with that id
 */
export function delete(db, category) {
  const index = findCategoryIndex(category);
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
  schema.assertValidId(category.id);
  const index = categories(db).findIndex(a => a.id === category.id);
  if (index === -1) {
    throw new Error(`Cannot find category by id "${category.id}"`);
  }
  return index;
}
