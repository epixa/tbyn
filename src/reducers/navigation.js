import { TOGGLE_SIDEBAR } from '../actions/sidebar';
import { SHOW_BUDGET, SHOW_REPORTS, SHOW_TRANSACTIONS } from '../actions/navigation';

const DEFAULT_STATE = {
  truncated: false,
  currentPanel: 'budget',
  collapsed: {
    off_budget: false,
    on_budget: false,
    closed: false,
  }
};

const navigationReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_ACCOUNT_NAV':
      return {
        ...state,
        collapsed: {
          ...state.collapsed,
          [action.name]: !state.collapsed[action.name],
        }
      };
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        truncated: !state.truncated,
      };
    case SHOW_BUDGET:
      return {
        ...state,
        currentPanel: 'budget',
      };
    case SHOW_REPORTS:
      return {
        ...state,
        currentPanel: 'reports',
      };
    case SHOW_TRANSACTIONS:
      return {
        ...state,
        currentPanel: 'transactions',
      };
    default:
      return state;
  }
};

export default navigationReducer;
