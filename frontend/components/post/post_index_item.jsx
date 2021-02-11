import React from 'react';
import { withRouter } from 'react-router-dom';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
  }


//   handleClick() {
//     const postId = this.props.post.id;
//     this.props.history.push(`/posts/${postId}`);
//   }

  render() {
    const { title, body } = this.props.post;
    return (
      <div
        className="post-index-item"
        // onClick={this.handleClick}
      >
        <div className="index-item-info">
          <span className="index-item-title">{title}</span>
          <span className="index-item-body">{body}</span>
        </div>
      </div>
    );
  }
}

export default PostIndexItem;