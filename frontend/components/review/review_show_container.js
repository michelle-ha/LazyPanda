import { connect } from 'react-redux';

import ReviewShow from './review_show';
import { deleteReview } from '../../actions/review_actions'

const mSTP = (state) => {
    return {
        postReviews: Object.values(state.entities.reviews),
        currentUserId: state.session.id
    }
}

const mDTP = dispatch => {
    return {
        deleteReview: review => dispatch(deleteReview(review)),
    }
}

export default connect(mSTP, mDTP)(ReviewShow);