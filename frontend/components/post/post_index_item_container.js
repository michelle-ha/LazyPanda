import { connect } from 'react-redux';
// import { fetchPost } from '../../actions/post_actions';
import PostIndexItem from './post_index_item';


const mapStateToProps = (state, ownProps) => {
    return {
        currentUserId: state.session.id,
        currentUser: state.entities.users[state.session.id],
        postId: ownProps.postId,
        likes: Object.values(state.entities.likes)

    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         createSubpost: subpost => dispatch(createSubpost(subpost)),
//         fetchPost: postId => dispatch(fetchPost(postId)),
//         clearErrors: () => dispatch(clearErrors()),
//         openModal: () => dispatch(openModal('login'))

//     }
// }

export default connect(mapStateToProps, mapDispatchToProps)(PostIndexItem);