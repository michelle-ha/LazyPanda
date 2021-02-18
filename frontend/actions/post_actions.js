import * as PostAPIUtil from '../util/post_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";
// export const POST_ERROR = "POST_ERROR";

export const receivePosts = payload => ({
  type: RECEIVE_POSTS,
  payload
});

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

export const removePost = postId => ({
  type: REMOVE_POST,
  postId
});

// export const postError = error => ({
//   type: POST_ERROR,
//   error
// });

export const fetchPosts = () => dispatch => (
  PostAPIUtil.fetchPosts().then(payload => dispatch(receivePosts(payload)))
);

export const fetchPost = postId => dispatch => (
  PostAPIUtil.fetchPost(postId).then(post => dispatch(receivePost(post)))
);

export const createPost = post => dispatch => (
  PostAPIUtil.createPost(post)
    .then(post => { dispatch(receivePost(post)); dispatch(clearErrors())},
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const updatePost = post => dispatch => (
  PostAPIUtil.updatePost(post)
    .then(post => { dispatch(receivePost(post)); dispatch(clearErrors())},
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const deletePost = postId => dispatch => (
  PostAPIUtil.destroyPost(postId)
    .then(() => dispatch(removePost(postId)))
);