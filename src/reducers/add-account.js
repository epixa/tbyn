'use strict';

import {
  CREATE_ACCOUNT,
  SHOW_ADD_ACCOUNT,
  CANCEL_ADD_ACCOUNT,
  CHANGE_ADD_ACCOUNT_TYPE
} from '../actions/accounts';

import { TOGGLE_SIDEBAR } from '../actions/sidebar';

const DEFAULT_STATE = {
  active: false,
  newAccountType: null,
  truncated: false
};

const addAccountReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        truncated: !state.truncated
      };
    case SHOW_ADD_ACCOUNT:
      return {
        ...state,
        active: true
      };
    case CANCEL_ADD_ACCOUNT:
      return {
        ...state,
        active: false,
        newAccountType: null
      };
    case CREATE_ACCOUNT:
      return {
        ...state,
        active: false,
        newAccountType: null
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
