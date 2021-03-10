import { connect } from 'react-redux';

import SubpostShow from './subpost_show';
import { deleteSubpost, fetchSubposts } from '../../actions/subpost_actions'

const mSTP = (state) => {
    return {
        // postSubposts: Object.values(state.entities.subposts),
        // currentUserId: state.session.id
        subposters: state.entities.businesses,
        currentUser: state.entities.users[state.session.id],
    }
}

const mDTP = dispatch => {
    return {
        deleteSubpost: subpost => dispatch(deleteSubpost(subpost)),
        fetchSubposts: (postId) => dispatch(fetchSubposts(postId)),

    }
}

export default connect(mSTP, mDTP)(SubpostShow);