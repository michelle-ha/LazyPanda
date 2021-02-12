import {
    RECEIVE_POSTS,
    RECEIVE_POST,
    REMOVE_POST,
  } from '../actions/post_actions';
  
  const postsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState;
  
    switch(action.type){
      case RECEIVE_POSTS:
        return action.posts;
      case RECEIVE_POST:
        const newPost = { [action.post.id]: action.post };
        return Object.assign({}, state, newPost);
      case REMOVE_POST:
        nextState = Object.assign({}, state);
        delete nextState[action.post.id];
        return nextState;
      default:
        return state;
    }
  };

  export default postsReducer;
