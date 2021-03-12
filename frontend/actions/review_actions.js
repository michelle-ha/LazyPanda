import * as ReviewAPIUtil from '../util/review_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

const receiveReview = review => {
    return {
        type: RECEIVE_REVIEW,
        review
    }
}

const removeReview = reviewId => {
    return {
        type: REMOVE_REVIEW,
        reviewId
    }
}

  export const deleteReview = reviewId => dispatch => (
    ReviewAPIUtil.deleteReview(reviewId)
      .then(() => dispatch(removeReview(reviewId)))
  );

  export const createReview = review => dispatch => (
    ReviewAPIUtil.createReview(review)
      .then(review => { dispatch(receiveReview(review)); dispatch(clearErrors())},
        err => dispatch(receiveErrors(err.responseJSON)))
  );