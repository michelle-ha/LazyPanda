import { connect } from 'react-redux';
import SubpostForm from './subpost_form';
import { createSubpost, clearErrors } from '../../actions/subpost_actions';
import { fetchPost } from '../../actions/post_actions';
// import { clearErrors } from '../../actions/error_actions';
import {openModal } from '../../actions/modal_actions'


const mapStateToProps = (state, ownProps) => {
    return {
        formType: 'Post Response',
        currentUserId: state.session.id,
        // currentUser: state.entities.users[state.session.id],
        post: state.entities.posts[ownProps.match.params.postId],
        postId: ownProps.match.params.postId,
        // subposts: state.entities.subposts,
        // postId: ownProps.match.params.post.id,
        errors: state.errors.post,
        subpost: {
            title: '',
            photoFile: null,
            photoUrl: null,
          },
    }
}

const mapDispatchToProps = dispatch => {
    return {
        processForm: subpost => dispatch(createSubpost(subpost)),
        fetchPost: postId => dispatch(fetchPost(postId)),
        clearErrors: () => dispatch(clearErrors()),
        openModal: () => dispatch(openModal('login'))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubpostForm);