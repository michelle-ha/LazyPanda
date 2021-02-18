import React from 'react';
import { connect } from 'react-redux';
import PostEditForm from './post_edit_form';
import { fetchPost, updatePost } from '../../actions/post_actions';
import {clearErrors} from "../../actions/error_actions"

class EditPostForm extends React.Component {
    // componentDidMount() {
    //   this.props.fetchPost(this.props.match.params.postId); 
    // }
   
  render() {
      const { post, updatePost, errors } = this.props;
   
      if (!post) return null;
      return (
        <PostEditForm
          post={post} 
          updatePost={updatePost}
          errors = {errors}/>
      );
    }
  }
   
  const mapStateToProps = (state, ownProps) => ({ 
    // post: state.entities.posts[ownProps.match.params.postId],
    post: ownProps.post,
    errors: state.errors.post
  });
   
  const mapDispatchToProps = dispatch => ({ 
    fetchPost: postId => dispatch(fetchPost(postId)),
    updatePost: post => dispatch(updatePost(post)),
    clearErrors: () => dispatch(clearErrors())

  });
   
  export default connect(mapStateToProps, mapDispatchToProps)(EditPostForm);