import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {RECEIVE_POSTS} from "../actions/post_actions"
import { RECEIVE_USER } from '../actions/user_actions';


const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_POSTS:
      return Object.assign({}, action.payload.users, state)
    case RECEIVE_USER:
      let newState = Object.assign({}, oldState)
      newState[action.user.id] = action.user;
      return newState;
    default:
      return state;
  }
};

export default usersReducer;
