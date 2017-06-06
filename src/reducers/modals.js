import { CANCEL_ADD_ACCOUNT, CREATE_ACCOUNT, SHOW_ADD_ACCOUNT } from '../actions/accounts';

const DEFAULT_STATE = {
  currentModal: null,
};

const modalsReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SHOW_ADD_ACCOUNT:
      return {
        ...state,
        currentModal: 'add-account',
      };
    case CANCEL_ADD_ACCOUNT:
      return {
        ...state,
        currentModal: null,
      };
    case CREATE_ACCOUNT:
      return {
        ...state,
        currentModal: null,
      };
    default:
      return state;
  }
};

export default modalsReducer;
