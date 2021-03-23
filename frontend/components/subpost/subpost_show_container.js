import { connect } from 'react-redux';

import SubpostShow from './subpost_show';
import { deleteSubpost } from '../../actions/subpost_actions'
// import {getLikes} from "../../reducers/selectors"

const mSTP = (state) => {
    return {
        postSubposts: Object.values(state.entities.subposts),
        currentUserId: state.session.id,
        // likes: getLikes(state.entities.likes, ownProps.subpost.id, "Subpost")
        likes: Object.values(state.entities.subposts)

    }
}

const mDTP = dispatch => {
    return {
        deleteSubpost: subpost => dispatch(deleteSubpost(subpost)),
    }
}

export default connect(mSTP, mDTP)(SubpostShow);