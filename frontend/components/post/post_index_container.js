
import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, updatePost, destroyPost } from '../../actions/post_actions';
// import { allPosts } from '../../reducers/selectors';

const mapStateToProps =  ({ session, entities }) => {
  return({
    // posts: allPosts(state.entities),
    currentUser: entities.users[session.id],
    posts: Object.values(entities.posts),
    users: entities.users
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    requestPosts: () => dispatch(fetchPosts()),
  // updatePost: post => dispatch(updatePost(post))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);