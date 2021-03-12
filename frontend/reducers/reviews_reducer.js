import { RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions'

import { RECEIVE_POST } from '../actions/post_actions'

const ReviewsReducer = (oldState = {}, action) => {
    
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_REVIEW:
            nextState[action.review.review.id] = action.review.review;
            return nextState;
        case REMOVE_REVIEW:
            delete nextState[action.reviewId];
            return nextState;
        case RECEIVE_POST:
            return Object.assign({}, action.post.reviews);
        default:
            return oldState;
    }
}

export default ReviewsReducer;