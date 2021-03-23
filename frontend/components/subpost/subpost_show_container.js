import { connect } from 'react-redux';

import SubpostShow from './subpost_show';
import { deleteSubpost } from '../../actions/subpost_actions'
// import {getLikes} from "../../reducers/selectors"
import { createLike, deleteLike } from '../../actions/like_actions';
import { findLike } from '../../reducers/selectors';

const mSTP = (state, ownProps) => {
    return {
        postSubposts: Object.values(state.entities.subposts),
        currentUserId: state.session.id,
        // likes: getLikes(state.entities.likes, ownProps.subpost.id, "Subpost")
        // likes: Object.values(state.entities.likes)
        like: findLike(state.entities.likes, ownProps.likeable_id, ownProps.likeable_type, ownProps.author_id)

    }
}

const mDTP = dispatch => {
    return {
        deleteSubpost: subpost => dispatch(deleteSubpost(subpost)),
        createLike: (like) => dispatch(createLike(like)),
        deleteLike: (likeId) => dispatch(deleteLike(likeId))
    }
}

export default connect(mSTP, mDTP)(SubpostShow);