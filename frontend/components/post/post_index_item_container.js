import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_actions';
import PostIndexItem from './post_index_item';


const mapStateToProps = (state, ownProps) => {
    return {
        currentUserId: state.session.id,
        currentUser: state.entities.users[state.session.id],
        postId: ownProps.postId,
        likes: Object.values(state.entities.likes)

    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostIndexItem);