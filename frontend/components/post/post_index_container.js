
import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts } from '../../actions/post_actions';
// import { getLikes } from '../../reducers/selectors';


const mapStateToProps =  ({ session, entities }) => {
  return({
    currentUser: entities.users[session.id],
    posts: Object.values(entities.posts),
    users: entities.users,


  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    requestPosts: () => dispatch(fetchPosts()),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);