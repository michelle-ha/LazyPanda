import {
    RECEIVE_POSTS,
    RECEIVE_POST,
    REMOVE_POST,
  } from '../actions/post_actions';
  
  const postsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
  
    switch(action.type){
      case RECEIVE_POSTS:
        return action.payload.posts;
      case RECEIVE_POST:
        nextState[action.payload.post.id] = action.payload.post;
        return nextState
      case REMOVE_POST:
        nextState = Object.assign({}, state);
        delete nextState[action.postId];
        return nextState;
      default:
        return state;
    }
  };

  export default postsReducer;
