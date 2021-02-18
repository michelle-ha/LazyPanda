import { connect } from 'react-redux';

import { fetchPost, deletePost } from '../../actions/post_actions';
import {  selectPost } from '../../reducers/selectors';
import PostShow from './post_show';

const mapStateToProps = (state, ownProps) => {
  const post = state.entities.posts[ownProps.match.params.postId]

  // const currentUser = state.entities.users[state.session.id];
  return {
    post,
    currentUser: state.entities.users[state.session.id],
    // user: state.entities.users[state.entities.post.author_id]
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPost: postId => dispatch(fetchPost(postId)),
  deletePost: postId => dispatch(deletePost(postId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostShow);
