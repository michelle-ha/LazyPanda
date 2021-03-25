import React from 'react';
import { withRouter } from 'react-router-dom';
// import PostShowContainer from "../post/post_show_container"
// import SubpostShowContainer from "../subpost/subpost_show_container"
// import ReviewShowContainer from "../review/review_show_container"
// import Like from '../likes/like';
import LikeButton from "../likes/like_button"


class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    // this.myFunction = this.myFunction.bind(this);

  }

  // componentDidMount(){
  // //   // debugger
  //   this.props.fetchPost(this.props.post.id)
  // }

  // componentDidUpdate(prevProps) {
  //   // const {likes} = this.props.post.likeIds
  //   // debugger
  //   let didUpdate = this.props.post.likeIds.length !== prevProps.post.likeIds.length
    

  //   if (didUpdate ) {

  //       this.props.fetchPosts()
  //   }

  // }

  // componentDidUpdate(prevProps) {
  //   debugger
  //   let didUpdate = this.props.likes.length !== prevProps.likes.length
  //   if (didUpdate && prevProps.likes.length && this.props.likes.length) {
  //       this.props.fetchPosts()
  //   }

  // }

  handleClick() {
    const postId = this.props.post.id;
    this.props.history.push(`/${postId}`);
  }

  // myFunction() {
  //   return <ReviewShowContainer/>
  // }

  render() {
    if (!this.props.post) return null
    const { title, body, photo } = this.props.post;
    // console.log(photo)
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
          {/* <div onclick={this.myFunction}> <i class="fas fa-comment-alt"> </i> </div> */}
            <div className="index-item-icons">
            <LikeButton likeable_id={this.props.post.id} likeable_type={'Post'} author_id={this.props.currentUserId} /> 
            <span>{this.props.post.likeIds.length} Likes</span> 

              {/* <i class="fas fa-heart"> {likeLength} Likes</i> */}
              <i class="fas fa-comments"> {subpostLength} Subposts</i>
              <i class="fas fa-comment-alt" id="reviewLength"> {reviewLength} Comments</i>
            </div>
          </div>
      </div>
      {/* <i class="fas fa-comment-alt"  onclick={this.myFunction}></i> */}
      {/* <ReviewShowContainer/> */}
      </div>
    );
  }
}

export default withRouter(PostIndexItem);