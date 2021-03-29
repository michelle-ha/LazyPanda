import React, { Component, createRef } from 'react';
import { Link,  Redirect} from 'react-router-dom';
import NavBar from "../greeting/navbar"
import SubpostFormContainer from "../subpost/subpost_form_container"
import SubpostShowContainer from "../subpost/subpost_show_container"
import ReviewFormContainer from "../review/review_form_container"
import ReviewShowContainer from "../review/review_show_container"
// import Like from "../likes/like"

class PostShow extends React.Component {
  constructor(props) {
    super(props); 

  }

  scrollDiv = createRef();

  scrollSmoothHandler = () => {
    this.scrollDiv.current.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postId)
    .fail(() => this.props.history.push("/"))
  }

  render() {
    const {post, deletePost} = this.props
    if (!post) return null

    let reviewLength;
    reviewLength = this.props.post.reviewIds.length

    // if (!post) return (<Redirect to="/" />)
    let canEditPost;
    if (this.props.currentUser && this.props.currentUser.id === post.author_id) {
      canEditPost = (
        <div className="post-edit-links">
            <button ><Link to={`/${post.id}/edit`} className="edit-icon"><i class="fas fa-edit"></i></Link> </button>
            <button ><Link to="/" className="delete-icon" onClick={() => deletePost(post.id)}><i class="fas fa-trash"></i></Link></button>
        </div>
      )
    }
    let insertPhoto
    if (post.photo) {
      insertPhoto = (
        <li><img src={this.props.post.photo}/></li>
        )
    }

    return(
      <div className="single-post-show">
        <NavBar/>

        <div className="post-details">
          <ul>
            <li className="show-item-title">{this.props.post.title}</li>
            <li className="show-item-body">{this.props.post.body}</li>
            <div className="show-container">
              <li className="show-item-author">By: {this.props.post.author}</li>
              <Link to={`/users/${this.props.post.author_id}`}>              <img className="profile-pic-show" src={this.props.post.profilePicURL}/>
</Link>

            </div>

            <div className="picture-shown">{insertPhoto} </div>
            <div className="post-edit-container">
              {/* <i class="fas fa-heart">{likeLength} Likes</i> */}
              <button onClick={this.scrollSmoothHandler}><i class="fas fa-comment-alt"> {reviewLength} Comments</i></button>

              {canEditPost}
            </div>
            
          </ul>
        </div>
        <div><SubpostFormContainer
          postId={this.props.post.id}
        /></div>
        
        <div className="subpost-header">Responses:</div>
        <div><SubpostShowContainer/></div>
        <div className="post-comments">
        <div className="review-header" ref={this.scrollDiv}>Comments:</div>
        <ReviewShowContainer/>
        <ReviewFormContainer
          postId={this.props.post.id}
        /> 
        </div>
        <div className="go-back-link"><Link to="/" className="go-back">Go Back</Link></div>
      </div>
    );
  };
}

export default PostShow;
