import { connect } from 'react-redux';

import { fetchPost, deletePost, fetchPosts } from '../../actions/post_actions';
import {  selectPost } from '../../reducers/selectors';
import PostShow from './post_show';
// import {getLikes} from "../../reducers/selectors"
// import { createLike, deleteLike } from "../../actions/like_actions"

const mapStateToProps = (state, ownProps) => {

  return {
    post: state.entities.posts[ownProps.match.params.postId],
    currentUser: state.entities.users[state.session.id],
    // user: state.entities.users[state.entities.post.author_id]
    // likes: getLikes(state, ownProps.post)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPost: postId => dispatch(fetchPost(postId)),
  deletePost: postId => dispatch(deletePost(postId)),
  // fetchPosts: () => dispatch(fetchPosts())
  // createLike: (like) => dispatch(createLike(like)),
  // deleteLike: (like) => dispatch(deleteLike(like)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostShow);
