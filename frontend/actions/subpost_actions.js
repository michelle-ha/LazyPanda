import * as SubpostAPIUtil from '../util/subpost_api_util';
// import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_SUBPOST = 'RECEIVE_SUBPOST';
export const REMOVE_SUBPOST = 'REMOVE_SUBPOST';

export const CLEAR_SUBPOST_ERRORS = "CLEAR_SUBPOST_ERRORS";
export const RECEIVE_SUBPOST_ERRORS = "RECEIVE_SUBPOST_ERRORS";

export const receiveSubpostErrors = errors => ({
  type: RECEIVE_SUBPOST_ERRORS,
  errors
});

export const clearSubpostErrors = () => ({
  type: CLEAR_SUBPOST_ERRORS
});

const receiveSubpost = subpost => {
    return {
        type: RECEIVE_SUBPOST,
        subpost
    }
}

const removeSubpost = subpostId => {
    return {
        type: REMOVE_SUBPOST,
        subpostId
    }
}

// export const createSubpost = subpost => dispatch => {
//     return SubpostAPIUtil.createSubpost(subpost)
//         .then(subpost => dispatch(receiveSubpost(subpost)))
// }

  export const deleteSubpost = subpostId => dispatch => (
    SubpostAPIUtil.deleteSubpost(subpostId)
      .then(() => dispatch(removeSubpost(subpostId)))
  );

  export const createSubpost = subpost => dispatch => (
    SubpostAPIUtil.createSubpost(subpost)
      .then(subpost => { dispatch(receiveSubpost(subpost)); dispatch(clearSubpostErrors())},
        err => dispatch(receiveSubpostErrors(err.responseJSON)))
  );