import * as SubpostAPIUtil from '../util/subpost_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_SUBPOST = 'RECEIVE_SUBPOST';
export const RECEIVE_SUBPOSTS = 'RECEIVE_SUBPOSTS';
export const REMOVE_SUBPOST = 'REMOVE_SUBPOST';

const receiveSubpost = subpost => {
    return {
        type: RECEIVE_SUBPOST,
        subpost
    }
}

const receiveSubposts = (subposts) => {
    return {
      type: RECEIVE_SUBPOSTS,
      subposts,
    }
  }

const removeSubpost = subpost => {
    return {
        type: REMOVE_SUBPOST,
        subpostId: subpost.id
    }
}

export const createSubpost = subpost => dispatch => (
    SubpostAPIUtil.createSubpost(subpost)
      .then(subpost => { dispatch(receiveSubpost(subpost))}

  ));

  export const deleteSubpost = subpostId => dispatch => (
    SubpostAPIUtil.deleteSubpost(subpostId)
      .then(() => dispatch(removeSubpost(subpostId)))
  );

  export const fetchSubpost = (postId, subpostId) => (dispatch) => {
    return SubpostAPIUtil.fetchSubpost(postId, subpostId).then(
      (subpost) => dispatch(receiveSubpost(subpost)),
    )
  }
  
  export const fetchSubposts = (postId) => (dispatch) => {
    return SubpostAPIUtil.fetchSubposts(postId).then(
      (subposts) => dispatch(receiveSubposts(subposts)),
    )
  }