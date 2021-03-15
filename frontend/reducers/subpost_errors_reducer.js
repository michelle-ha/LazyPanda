import { RECEIVE_SUBPOST_ERRORS, CLEAR_SUBPOST_ERRORS } from '../actions/subpost_actions.js';


export default (state = [], action) => {
  Object.freeze(state);
  
  switch(action.type) {
    case RECEIVE_SUBPOST_ERRORS:
      return action.errors;
    case CLEAR_SUBPOST_ERRORS:
      return [];
    default:
      return state;
  }
};

// export default errorsReducer;