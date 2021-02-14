import React from 'react';
import { connect } from 'react-redux';
import PostEditForm from './post_edit_form';
import { fetchPost, updatePost } from '../../actions/post_actions';

class EditPostForm extends React.Component {
    componentDidMount() {
      this.props.fetchPost(this.props.match.params.postId); 
    }
   
    render() {
      const { action, formType, post } = this.props;
   
      if (!post) return null;
      return (
        <PostEditForm
          action={action}
          formType={formType}
          post={post} />
      );
    }
  }
   
  const mapStateToProps = (state, ownProps) => ({ 
    post: state.posts[ownProps.match.params.postId],
    formType: 'Update Post'
  });
   
  const mapDispatchToProps = dispatch => ({ 
    fetchPost: postId => dispatch(fetchPost(postId)),
    action: post => dispatch(updatePost(post)) 
  });
   
  export default connect(mapStateToProps, mapDispatchToProps)(EditPostForm);