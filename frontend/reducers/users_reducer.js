import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {RECEIVE_POSTS} from "../actions/post_actions"


const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_POSTS:
      return Object.assign({}, action.payload.users, state)
    default:
      return state;
  }
};

export default usersReducer;
