'use strict';

import { empty, insert, update, remove } from './index';

export default function categoriesReducer(state = empty(), action) {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return insert(state, action.data);
    case 'UPDATE_CATEGORY':
      return update(state, action.category);
    case 'DELETE_CATEGORY':
      return remove(state, action.category);
    default:
      return state;
  }
}
