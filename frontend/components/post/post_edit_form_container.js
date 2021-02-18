import React from 'react';
import { connect } from 'react-redux';
import PostEditForm from './post_edit_form';
import { fetchPost, updatePost } from '../../actions/post_actions';
import {clearErrors} from "../../actions/error_actions"
   
  const mapStateToProps = (state, ownProps) => ({ 
    post: state.entities.posts[ownProps.match.params.postId],
    errors: state.errors.post
  });
   
  const mapDispatchToProps = dispatch => ({ 
    fetchPost: postId => dispatch(fetchPost(postId)),
    updatePost: post => dispatch(updatePost(post)),
    clearErrors: () => dispatch(clearErrors())

  });
   
  export default connect(mapStateToProps, mapDispatchToProps)(PostEditForm);