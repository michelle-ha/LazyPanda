import { connect } from 'react-redux';
import { fetchPosts, fetchPost } from '../../actions/post_actions';
import PostIndexItem from './post_index_item';
import { getLikes } from '../../reducers/selectors';




const mapStateToProps = (state, ownProps) => {
    return {
        currentUserId: state.session.id,
        currentUser: state.entities.users[state.session.id],
        postId: ownProps.post.id,
        likes: Object.values(state.entities.likes),
        // likes: getLikes(state.entities.likes, ownProps.post.id, "Post"),
        post: ownProps.post,
        // likes: getLikes(state, ownProps.post.id),


    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPost: postId => dispatch(fetchPost(postId)),
        fetchPosts: () => dispatch(fetchPosts()),



    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostIndexItem);