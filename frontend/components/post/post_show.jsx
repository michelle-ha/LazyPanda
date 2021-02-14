import React from 'react';
import { Link,  Redirect} from 'react-router-dom';

class PostShow extends React.Component {
  constructor(props) {
  super(props); }

render() {
  const {post} = this.props
  if (!post) return (<Redirect to="/" />)
  return(
    <div className="single-post-show">
      <Link to="/">Back to Posts</Link>
      <div className="post-details">
      <li>Title: {this.props.post.title}</li>
        <li>Description: {this.props.post.body}</li>
        {/* <li>By: {this.props.users[this.props.post.author_id]}</li> */}
      </div>
    </div>
  );
};
}

export default PostShow;
