import {
    RECEIVE_POSTS,
    RECEIVE_POST,
    REMOVE_POST,
    POST_ERROR,
  } from '../actions/post_actions';
  import merge from 'lodash/merge';
  
  const postsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState;
  
    switch(action.type){
      case RECEIVE_POSTS:
        return action.payload.posts;
      case RECEIVE_POST:
        const newPost = { [action.post.id]: action.post };
        return merge({}, state, newPost);
      case REMOVE_POST:
        nextState = merge({}, state);
        delete nextState[action.post.id];
        return nextState;
      default:
        return state;
    }
  };

  export default postsReducer;
