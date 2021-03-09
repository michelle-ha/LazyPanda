import React from 'react';
import { Link,  Redirect} from 'react-router-dom';
import NavBar from "../greeting/navbar"
import SubpostFormContainer from "../subpost/subpost_form_container"
import SubpostShowContainer from "../subpost/subpost_show_container"

class PostShow extends React.Component {
  constructor(props) {
  super(props); }

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
            {/* <button ><Link to={`/${post.id}/edit`} className="edit-link">Edit</Link> </button> */}
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
            {/* <li className="post-author">By: {this.props.user.name}, {this.props.user.email}</li> */}
            <li className="post-body">{this.props.post.body}</li>
            <div className="picture-shown">{insertPhoto}</div>
            {canEditPost}
          </ul>
        </div>

        <SubpostFormContainer
          postId={this.props.post.id}
        />
        <SubpostShowContainer/>
        {/* {this.props.post.subposts.map} */}
        {/* {this.props.post.users[this.props.post.author_id].name} */}

      </div>
    );
  };
}

export default PostShow;
