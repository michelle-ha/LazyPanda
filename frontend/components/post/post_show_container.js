import { connect } from 'react-redux';

import { fetchPost, deletePost } from '../../actions/post_actions';
import {  selectPost } from '../../reducers/selectors';
import PostShow from './post_show';

const mapStateToProps = (state, ownProps) => {
  // const postId = parseInt(match.params.postId);
  // const post = selectPost(state.entities, postId);
  // const currentUser = state.entities.users[state.session.id];
  return {
    post: state.entities.posts[ownProps.match.params.postId],
    currentUser: state.entities.users[state.session.id],
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
