'use strict';

import { fromJS } from 'immutable';
import * as schema from './schema';

/**
 * Returns a db with no categories
 */
export function empty() {
  return fromJS([]);
}

/**
 * Gets list of active categories from the database
 */
export function active(categories) {
  return categories.filter(schema.isActive);
}

/**
 * Gets list of active categories from the database
 */
export function inactive(categories) {
  return categories.filterNot(schema.isActive);
}

/**
 * Inserts the category into the database
 * @throws if category is not valid
 */
export function insert(categories, category) {
  category = schema.cast(category);
  return categories.push(category);
}

/**
 * Updates the category in the database
 * @throws if category is not valid
 * @throws if no category exists in database with that id
 */
export function update(categories, category) {
  category = schema.cast(category);
  const index = findCategoryIndex(categories, category);
  return categories.update(index, () => category);
}

/**
 * Deletes the given category from the database
 * @throws if no category exists in database with that id
 */
export function remove(categories, category) {
  const index = findCategoryIndex(categories, category);
  return categories.delete(index);
}


/**
 * Finds the index of category in the categories list in the database
 * @throws if no category exists with that id
 */
function findCategoryIndex(categories, category) {
  const id = category.get('id');
  schema.assertValidId(id);
  const index = categories.findIndex(c => c.get('id') === id);
  if (index === -1) {
    throw new Error(`Cannot find category by id "${id}"`);
  }
  return index;
}
