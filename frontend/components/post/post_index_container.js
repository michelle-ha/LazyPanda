
import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts } from '../../actions/post_actions';
// import { getLikes } from '../../reducers/selectors';


// const mapStateToProps =  ({ session, entities }) => {
//   return({
//     posts: Object.values(entities.posts),
//     users: entities.users,
//     currentUserId: session.id,

//     currentUser: entities.users[session.id],

//     // likes: getLikes(entities.likes, ownProps.post.id, "Post")


//   });
// };

const mapStateToProps = (state, ownProps) => {


  return ({
      posts: Object.values(state.entities.posts),
      currentUser: state.entities.users[state.session.id],
      users: state.entities.users,
      // likes: Object.values(state.entities.likes)

  })
}


const mapDispatchToProps = (dispatch) => {
  return ({
    requestPosts: () => dispatch(fetchPosts()),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);