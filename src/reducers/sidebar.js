import { TOGGLE_SIDEBAR } from '../actions/sidebar';

const DEFAULT_STATE = {
  collapsed: false,
};

const sidebarReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        collapsed: !state.collapsed,
      };
    default:
      return state;
  }
};

export default sidebarReducer;
