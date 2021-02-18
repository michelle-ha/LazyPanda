import React from 'react';
import { Link,  Redirect} from 'react-router-dom';
import NavBar from "../greeting/navbar"

class PostShow extends React.Component {
  constructor(props) {
  super(props); }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postId); 
  }

  render() {
    const {post, deletePost} = this.props

    if (!post) return (<Redirect to="/" />)
    let canEditPost;
    if (this.props.currentUser && this.props.currentUser.id === post.author_id) {
      canEditPost = (
        <div className="post-edit-links">
            <button ><Link to={`/${post.id}/edit`} className="edit-link">Edit</Link> </button>
            <button ><Link to="/" className="delete-link" onClick={() => deletePost(post.id)}>Delete</Link></button>
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
            {/* <li className="post-author">By: {this.props.post.user.name}, {this.props.post.author.email}</li> */}
            <li className="post-body">{this.props.post.body}</li>
            <div className="picture-shown">{insertPhoto}</div>
            {canEditPost}
          </ul>
        </div>
      </div>
    );
  };
}

export default PostShow;
