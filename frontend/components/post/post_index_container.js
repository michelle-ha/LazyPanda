
import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, updatePost, destroyPost } from '../../actions/post_actions';
import { allPosts } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return({
  posts: allPosts(state.entities),
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
  requestPosts: () => dispatch(fetchPosts()),
  updatePost: post => dispatch(updatePost(post))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);