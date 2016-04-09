'use strict';

import { CREATE_ACCOUNT, SHOW_ADD_ACCOUNT } from '../actions/accounts';

const DEFAULT_STATE = {
  active: false
};

const addAccountReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SHOW_ADD_ACCOUNT:
      return {
        ...state,
        active: true
      };
    case CREATE_ACCOUNT:
      return {
        ...state,
        active: false
      };
    default:
      return state;
  }
};

export default addAccountReducer;
