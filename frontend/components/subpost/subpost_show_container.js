import { connect } from 'react-redux';

import SubpostShow from './subpost_show';
import { deleteSubpost } from '../../actions/subpost_actions'

import { fetchPost } from '../../actions/post_actions';


const mSTP = (state, ownProps) => {
    return {
        postSubposts: Object.values(state.entities.subposts),
        currentUserId: state.session.id,
    }
}

const mDTP = dispatch => {
    return {
        deleteSubpost: subpost => dispatch(deleteSubpost(subpost)),
        // createLike: (like) => dispatch(createLike(like)),
        // deleteLike: (likeId) => dispatch(deleteLike(likeId)),
        fetchPost: postId => dispatch(fetchPost(postId)),

    }
}

export default connect(mSTP, mDTP)(SubpostShow);