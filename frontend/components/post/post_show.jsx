import React from 'react';
import { Link,  Redirect} from 'react-router-dom';
import {deletePost } from '../../actions/post_actions';


class PostShow extends React.Component {
  constructor(props) {
  super(props); }

  componentDidMount() {
    this.props.fetchPost(); 
  }


render() {
  const {post, deletePost} = this.props

  if (!post) return (<Redirect to="/" />)
  return(
    <div className="single-post-show">
      <Link to="/">Back to Posts</Link>
      <div className="post-details">
      <li>Title: {this.props.post.title}</li>
        <li>Description: {this.props.post.body}</li>
        {/* <li>By: {this.props.users[this.props.post.author_id]}</li> */}
      </div>
      <Link to={`/${post.id}/edit`}>Edit</Link>
      <Link to="/" onClick={() => deletePost(post.id)}>Delete</Link>

    </div>
  );
};
}

export default PostShow;
