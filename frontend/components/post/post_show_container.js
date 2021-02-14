// import { connect } from 'react-redux';
// import PostShow from './post_show';
// import { deletePost, fetchPost } from '../../actions/post_actions';

// const mapStateToProps = (state, ownProps) => {
//     return({
      
//     post: state.posts[ownProps.match.params.postId]
//   });
// };

// const mapDispatchToProps = (dispatch, ownProps) => {

//   return({
//     fetchPost: id => dispatch(fetchPost(id)),
//     // destroyPost: (post) => dispatch(deletePost(post))
//   });
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(PostShow);

import { connect } from 'react-redux';

import { fetchPost } from '../../actions/post_actions';
import {  selectPost } from '../../reducers/selectors';
import PostShow from './post_show';

const mapStateToProps = (state, { match }) => {
  const postId = parseInt(match.params.postId);
  const post = selectPost(state.entities, postId);
  return {
    postId,
    post,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPost: id => dispatch(fetchPost(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostShow);
