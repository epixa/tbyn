import { defaults, trim } from 'lodash';
import { fromJS } from 'immutable';

export function isActive(category) {
  return category.get('active');
}

export function cast(category) {
  category = defaults(category, {
    id: "",
    name: "",
    active: true
  });

  category = fromJS(category);

  assertValidId(category.get('id'));
  assertValidName(category.get('name'));
  assertValidActive(category.get('active'));

  return category;
}

export function assertValidId(id) {
  const type = typeof id;
  if (type !== 'string') {
    throw new TypeError(`Category id must be a string, ${type} given`);
  }
  if (trim(id) === "") {
    throw new Error(`Category id cannot be empty`);
  }
}

export function assertValidName(name) {
  const type = typeof name;
  if (type !== 'string') {
    throw new TypeError(`Category name must be a string, ${type} given`);
  }
  if (trim(name) === "") {
    throw new Error(`Category name cannot be empty`);
  }
}

export function assertValidActive(active) {
  const type = typeof active;
  if (type !== 'boolean') {
    throw new TypeError(`Category active must be a boolean, ${type} given`);
  }
}
