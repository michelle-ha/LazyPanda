import React from 'react';
import { Link,  Redirect} from 'react-router-dom';
import {deletePost } from '../../actions/post_actions';
import logo from "../../../app/assets/images/PngItem_2512217.png"
import { NavLink } from 'react-router-dom';
import GreetingContainer from "../greeting/greeting_container";

class PostShow extends React.Component {
  constructor(props) {
  super(props); }

  componentDidMount() {
    this.props.fetchPost(); 
  }


render() {
  const {post, deletePost} = this.props

  if (!post) return (<Redirect to="/" />)
  return(
    <div className="single-post-show">
      <h1 className="logo">
          <NavLink to="/" activeClassName="active"><img className= "panda-logo" src={logo} /></NavLink> 

          </h1>

      <Link to="/">Back to Posts</Link>
      <div className="post-details">
        <ul>
        <li>{this.props.post.author.name}, {this.props.post.author.email}</li>
      <li>{this.props.post.title}</li>
        <li>{this.props.post.body}</li>
        <li><img src={this.props.post.photo}/></li>

        </ul>
      </div>
      <Link to={`/${post.id}/edit`}>Edit</Link>
      <Link to="/" onClick={() => deletePost(post.id)}>Delete</Link>

    </div>
  );
};
}

export default PostShow;
