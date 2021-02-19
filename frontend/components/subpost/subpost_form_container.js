import { connect } from 'react-redux';
import SubpostForm from './subpost_form';
import { createSubpost } from '../../actions/subpost_actions';
import { fetchPost } from '../../actions/post_actions';
import { clearErrors } from '../../actions/error_actions';
import {openModal } from '../../actions/modal_actions'


const mapStateToProps = (state, ownProps) => {
    return {
        currentUserId: state.session.id,
        currentUser: state.entities.users[state.session.id],
        subposts: state.entities.subposts,
        // postId: ownProps.match.params.postId,
        errors: state.errors.post
    }
}

const mapDispatchToProps = dispatch => {
    return {
        processPost: subpost => dispatch(createSubpost(subpost)),
        fetchPost: postId => dispatch(fetchPost(postId)),
        clearErrors: () => dispatch(clearErrors()),
        openModal: () => dispatch(openModal('login'))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubpostForm);