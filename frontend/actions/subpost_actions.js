import * as SubpostAPIUtil from '../util/subpost_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_SUBPOST = 'RECEIVE_SUBPOST';
export const REMOVE_SUBPOST = 'REMOVE_SUBPOST';

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

export const createSubpost = subpost => dispatch => {
    return SubpostAPIUtil.createSubpost(subpost)
        .then(subpost => dispatch(receiveSubpost(subpost)))
}

  export const deleteSubpost = subpostId => dispatch => (
    SubpostAPIUtil.deleteSubpost(subpostId)
      .then(() => dispatch(removeSubpost(subpostId)))
  );