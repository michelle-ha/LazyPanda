import { connect } from 'react-redux';
import PostForm from './post_form';
import { createPost } from '../../actions/post_actions';
// import {postError} from "../../actions/post_actions"
import React from 'react';



const mapStateToProps = ({ errors }) => {
    return {
      errors: errors.post,
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return({
      createPost: post => dispatch(createPost(post)),
    });
  };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);