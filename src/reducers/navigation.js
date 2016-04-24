'use strict';

import { TOGGLE_SIDEBAR } from '../actions/sidebar';

const DEFAULT_STATE = {
  truncated: false
};

const navigationReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        truncated: !state.truncated
      };
    default:
      return state;
  }
};

export default navigationReducer;
