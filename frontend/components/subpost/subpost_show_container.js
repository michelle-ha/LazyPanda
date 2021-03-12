import { connect } from 'react-redux';

import SubpostShow from './subpost_show';
import { deleteSubpost } from '../../actions/subpost_actions'

const mSTP = (state) => {
    return {
        postSubposts: Object.values(state.entities.subposts),
        currentUserId: state.session.id
    }
}

const mDTP = dispatch => {
    return {
        deleteSubpost: subpost => dispatch(deleteSubpost(subpost)),
    }
}

export default connect(mSTP, mDTP)(SubpostShow);