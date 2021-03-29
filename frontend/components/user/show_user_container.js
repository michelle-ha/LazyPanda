import { connect } from 'react-redux';
import ShowUser from './show_user_form';
import { fetchPosts } from '../../actions/post_actions';
import { fetchUser } from '../../actions/user_actions'

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        showUser: state.entities.users[ownProps.match.params.userId],
        posts: Object.values(state.entities.posts)
    }
}

const mDTP = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
        fetchUser: userId => dispatch(fetchUser(userId)),
    }
}

export default connect(mSTP, mDTP)(ShowUser);