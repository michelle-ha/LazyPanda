import { connect } from 'react-redux';
import { createReview } from '../../actions/review_actions';
import { fetchPost } from '../../actions/post_actions';
import { clearErrors } from '../../actions/error_actions';
import {openModal } from '../../actions/modal_actions'
import ReviewForm from './review_form';


const mapStateToProps = (state, ownProps) => {
    return {
        currentUserId: state.session.id,
        currentUser: state.entities.users[state.session.id],
        reviews: state.entities.reviews,
        postId: ownProps.postId,
        errors: state.errors.review
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createReview: review => dispatch(createReview(review)),
        fetchPost: postId => dispatch(fetchPost(postId)),
        clearErrors: () => dispatch(clearErrors()),
        openModal: () => dispatch(openModal('login'))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);