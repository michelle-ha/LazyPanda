import { connect } from 'react-redux';
import PostForm from './post_form';
import { createPost, fetchPost } from '../../actions/post_actions';
import {clearErrors} from "../../actions/error_actions"

const mapStateToProps = state => {
  return {
      currentUserId: state.session.id,
      currentUser: state.entities.users[state.session.id],
      posts: state.entities.posts,
      errors: state.errors.post
  }
}

  const mapDispatchToProps = (dispatch) => {
    return({
      createPost: post => dispatch(createPost(post)),
      fetchPost: postId => dispatch(fetchTrack(postId)),
      clearErrors: () => dispatch(clearErrors())
    });
  };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);