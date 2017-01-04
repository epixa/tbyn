import {
  CREATE_ACCOUNT,
  SHOW_ADD_ACCOUNT,
  CANCEL_ADD_ACCOUNT,
} from '../actions/accounts';

import { TOGGLE_SIDEBAR } from '../actions/sidebar';

const DEFAULT_STATE = {
  active: false,
  truncated: false,
};

const addAccountReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        truncated: !state.truncated,
      };
    case SHOW_ADD_ACCOUNT:
      return {
        ...state,
        active: true,
      };
    case CANCEL_ADD_ACCOUNT:
      return {
        ...state,
        active: false,
      };
    case CREATE_ACCOUNT:
      return {
        ...state,
        active: false,
      };
    default:
      return state;
  }
};

export default addAccountReducer;
