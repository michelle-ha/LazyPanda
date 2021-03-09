import * as SubpostApiUtil from '../util/subpost_api_util';
// import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_SUBPOST = 'RECEIVE_SUBPOST';
export const RECEIVE_SUBPOSTS = 'RECEIVE_SUBPOSTS'
export const REMOVE_SUBPOST = 'REMOVE_SUBPOST';

export const RECEIVE_SUBPOST_ERRORS = `RECEIVE_SUBPOST_ERRORS`
export const CLEAR_SUBPOST_ERRORS = `CLEAR_SUBPOST_ERRORS`

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

  //change to subpostId?
const removeSubpost = subpost => {
    return {
        type: REMOVE_SUBPOST,
        subpostId: subpost.id
    }
}

export const receiveErrors = (errors) => {
    return {
      type: RECEIVE_SUBPOST_ERRORS,
      errors,
    }
  }
  
  export const clearErrors = () => {
    return {
      type: CLEAR_SUBPOST_ERRORS,
    }
  }

  export const createSubpost = (subpost) => (dispatch) => {
    return SubpostApiUtil.createSubpost(subpost).then(
      (createdSubpost) => dispatch(receiveSubpost(createdSubpost)),
      (error) => dispatch(receiveErrors(error.responseJSON))
    )
  }
  
  export const updateSubpost = (subpost) => (dispatch) => {
    return SubpostApiUtil.updateSubpost(subpost).then(
      (updateSubpost) => dispatch(receiveSubpost(updateSubpost)),
      (error) => dispatch(receiveErrors(error.responseJSON))
    )
  }
  
  export const deleteSubpost = (subpostId) => (dispatch) => {
    return SubpostApiUtil.deleteSubpost(subpostId).then(() =>
      dispatch(removeSubpost(subpostId))
    )
  }
  
  export const fetchSubpost = (postId, subpostId) => (dispatch) => {
    return SubpostApiUtil.fetchSubpost(postId, subpostId).then(
      (subpost) => dispatch(receiveSubpost(subpost)),
      (error) => dispatch(receiveErrors(error.responseJSON))
    )
  }
  
  export const fetchSubposts = (postId) => (dispatch) => {
    return SubpostApiUtil.fetchSubposts(postId).then(
      (subposts) => dispatch(receiveSubposts(subposts)),
      (error) => dispatch(receiveErrors(error.responseJSON))
    )
  }
  