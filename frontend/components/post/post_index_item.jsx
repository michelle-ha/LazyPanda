import React from 'react';
import { withRouter } from 'react-router-dom';
// import PostShowContainer from "../post/post_show_container"
// import SubpostShowContainer from "../subpost/subpost_show_container"
// import ReviewShowContainer from "../review/review_show_container"
// import Like from '../likes/like';
import LikeButton from "../likes/like_button"
import { Link } from 'react-router-dom';



class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    // this.myFunction = this.myFunction.bind(this);

  }

  //  componentDidMount(){
  //   this.props.fetchPost(this.props.post.id)
  //   this.props.fetchPosts()
  // }



  handleClick() {
    const postId = this.props.post.id;
    this.props.history.push(`/${postId}`);
  }



  render() {
    // debugger
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
            <div className="index-author">
            <div className="index-item-author">By:  {this.props.user.name}</div> 
            <Link to={`/users/${this.props.user.id}`}><img className="profile-pic" src={this.props.user.profilePicURL}/></Link>
            </div>
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

      </div>
    );
  }
}

export default withRouter(PostIndexItem);