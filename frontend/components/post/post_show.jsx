import React, { Component, createRef } from 'react';
import { Link,  Redirect} from 'react-router-dom';
import NavBar from "../greeting/navbar"
import SubpostFormContainer from "../subpost/subpost_form_container"
import SubpostShowContainer from "../subpost/subpost_show_container"
import ReviewFormContainer from "../review/review_form_container"
import ReviewShowContainer from "../review/review_show_container"

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
  }

  render() {
    const {post, deletePost} = this.props

    if (!post) return (<Redirect to="/" />)
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
            <li className="post-title">{this.props.post.title}</li>
            {/* <li className="post-author">By: {this.props.user.name}, {this.props.user.email}</li> */}
            <li className="post-body">{this.props.post.body}</li>
            <div className="picture-shown">{insertPhoto}</div>
            <div className="post-edit-container">
              <div className="post-container">
                <li className="subpost-author">By: {this.props.post.author}</li>
                {/* <a href="#show-comments"><i class="fas fa-comment-alt"></i></a> */}
                
              </div>
              {canEditPost}
            </div>
            <button onClick={this.scrollSmoothHandler}><i class="fas fa-comment-alt"> {Object.keys(reviews).length} Comments</i></button>

            
          </ul>
        </div>
        <div><SubpostFormContainer
          postId={this.props.post.id}
        /></div>
        
        <div className="subpost-header">Responses:</div>
        <div><SubpostShowContainer/></div>
        <div className="post-comments">
        <div className="review-header" ref={this.scrollDiv}>Comments:</div>
        {/* <div className="native-comments" id="show-comments"></div> */}
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
