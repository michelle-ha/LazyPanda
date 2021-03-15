import * as ReviewAPIUtil from '../util/review_api_util';
// import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

export const CLEAR_REVIEW_ERRORS = "CLEAR_REVIEW_ERRORS";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";

export const receiveReviewErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});

export const clearReviewErrors = () => ({
  type: CLEAR_REVIEW_ERRORS
});

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
      .then(review => { dispatch(receiveReview(review)); dispatch(clearReviewErrors())},
        err => dispatch(receiveReviewErrors(err.responseJSON)))
  );