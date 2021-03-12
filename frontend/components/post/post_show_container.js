import { connect } from 'react-redux';

import { fetchPost, deletePost } from '../../actions/post_actions';
import { fetchSubposts, deleteSubpost } from '../../actions/subpost_actions';
import { fetchUsers } from '../../actions/user_actions'
import { selectPost } from '../../reducers/selectors'
import { getSubpostsForPost } from '../../reducers/selectors'


import PostShow from './post_show';

const mapStateToProps = (state, {match}) => {
  const users = state.entities.users
  const postId = parseInt(match.params.postId)
  const post = selectPost(state.entities, postId)
  const subposts = getSubpostsForPost(state, { postId })
  return {
    currentUser: state.entities.users[state.session.id],
    // user: state.entities.users[state.entities.post.author_id],
    postId,
    post,
    subposts,
    users,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPost: postId => dispatch(fetchPost(postId)),
  deletePost: postId => dispatch(deletePost(postId)),
  fetchSubposts: (postId) => dispatch(fetchSubposts(postId)),
  deleteSubpost: (subpostId) => dispatch(deleteSubpost(subpostId)),
  fetchUsers: () => dispatch(fetchUsers()),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostShow);
