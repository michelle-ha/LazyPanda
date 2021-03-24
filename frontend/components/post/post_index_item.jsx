import React from 'react';
import { withRouter } from 'react-router-dom';
import LikeButton from "../likes/like_button"
import { connect } from 'react-redux';
import { getLikes } from '../../reducers/selectors';
import { fetchPosts } from '../../actions/post_actions';


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

    let reviewLength;
    reviewLength = this.props.post.reviewIds.length

    let subpostLength;
    subpostLength = this.props.post.subpostIds.length

    let likeLength;
    likeLength = this.props.post.likeIds.length

    return (
      <div>
        <div
          className="post-index-item">
          <div className="index-item-info" onClick={this.handleClick}>
            {insertPhoto}
            <div className="index-item-title" >{title}</div>
            <div className="index-item-body">{body}</div>
          </div>
          <div className="index-info">
            <div className="index-item-author">By: {this.props.user.name}</div>
            <div className="index-item-icons">
              <LikeButton likeable_id={this.props.post.id} likeable_type={'Post'} author_id={this.props.currentUser.id} /> 
              <span>{this.props.post.likeIds.length} Likes</span>
              {/* <i class="fas fa-heart"> {likeLength} Likes</i> */}
              <i class="fas fa-comments"> {subpostLength} Subposts</i>
              <i class="fas fa-comment-alt" id="reviewLength"> {reviewLength} Comments</i>
            </div>
          </div>
      </div>

      </div>
    );
  }
}

export default PostIndexItem

