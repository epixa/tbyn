'use strict';

import { CREATE_ACCOUNT, SHOW_ADD_ACCOUNT } from '../actions/accounts';

const defaultState = {
  showAddAccount: false
};

export default function uiReducer(state = defaultState, action) {
  switch (action.type) {
    case SHOW_ADD_ACCOUNT:
      return {
        ...state,
        showAddAccount: true
      };
    case CREATE_ACCOUNT:
      return {
        ...state,
        showAddAccount: false
      };
    default:
      return state;
  }
}

