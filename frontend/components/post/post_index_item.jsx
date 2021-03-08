import React from 'react';
import { withRouter } from 'react-router-dom';
import PostShowContainer from "../post/post_show_container"



class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    const postId = this.props.post.id;
    this.props.history.push(`/${postId}`);
  }

  render() {
    const { title, body, photo } = this.props.post;
    let insertPhoto;
    if (photo) {
      insertPhoto = (
        <div className="index-item-photo"><img src={photo}/></div>
      )
    }

    return (
      <div
        className="post-index-item"
        onClick={this.handleClick}>
        <div className="index-item-info">
          {insertPhoto}
          <div className="index-item-title">{title}</div>
          <div className="index-item-body">{body}</div>
          {/* <div className="index-item-author">By: {this.props.user.name}</div> */}
        </div>
      </div>
    );
  }
}

export default withRouter(PostIndexItem);