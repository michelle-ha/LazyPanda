
import * as PostAPIUtil from '../util/post_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const POST_ERROR = "POST_ERROR";


export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

export const removePost = post => ({
  type: REMOVE_POST,
  post
});

export const postError = error => ({
  type: POST_ERROR,
  error
});


export const fetchPosts = () => dispatch => (
  PostAPIUtil.fetchPosts().then(posts => dispatch(receivePosts(posts)))
);

export const fetchPost = id => dispatch => (
  PostAPIUtil.fetchPost(id).then(post => dispatch(receivePost(post)))
);

export const createPost = post => dispatch => (
  PostAPIUtil.createPost(post)
  .then(post => { dispatch(receivePost(post)); dispatch(clearErrors())},
  err => dispatch(receiveErrors(err.responseJSON)))
);

// export const createPost = post => dispatch => (
//   PostAPIUtil.createPost(post).then(post => (
//     dispatch(receivePost(post))

//   ), err => {
//     return dispatch(receiveErrors(err.responseJSON))
//   })
// );

export const updatePost = post => dispatch => (
  PostAPIUtil.updatePost(post).then(post => dispatch(receivePost(post)))
); //want errors here, too?

export const deletePost = post => dispatch => (
  PostAPIUtil.destroyPost(post).then(post => dispatch(removePost(post)))
);