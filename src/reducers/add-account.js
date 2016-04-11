'use strict';

import {
  CREATE_ACCOUNT,
  SHOW_ADD_ACCOUNT,
  CHANGE_ADD_ACCOUNT_TYPE
} from '../actions/accounts';

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
    case CHANGE_ADD_ACCOUNT_TYPE:
      return {
        ...state,
        newAccountType: action.newAccountType
      };
    default:
      return state;
  }
};

export default addAccountReducer;
