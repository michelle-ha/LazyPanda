import * as PostApiUtil from '../util/post_api_util';
// import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";

export const RECEIVE_POST_ERRORS = `RECEIVE_POST_ERRORS`
export const CLEAR_POST_ERRORS = `CLEAR_POST_ERRORS`

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

export const removePost = postId => ({
  type: REMOVE_POST,
  postId,

});

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_REVIEW_ERRORS,
    errors,
  }
}

export const clearErrors = () => {
  return {
    type: CLEAR_REVIEW_ERRORS,
  }
}

export const fetchPosts = () => dispatch => (
  PostApiUtil.fetchPosts().then(posts => dispatch(receivePosts(posts)))
);

export const fetchPost = postId => dispatch => (
  PostApiUtil.fetchPost(postId).then(post => dispatch(receivePost(post)))
);

export const createPost = (post) => (dispatch) => {
  return PostApiUtil.createPost(post).then(
    (createdPost) => dispatch(receivePost(createdPost)),
    (error) => dispatch(receiveErrors(error.responseJSON))
  )
}

export const updatePost = (post) => (dispatch) => {
  return PostApiUtil.updatePost(post).then(
    (updatePost) => dispatch(receivePost(updatePost)),
    (error) => dispatch(receiveErrors(error.responseJSON))
  )
}

export const deletePost = (postId) => (dispatch) => {
  return PostApiUtil.deletePost(postId).then(() =>
    dispatch(removePost(postId))
  )
}