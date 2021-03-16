import React from 'react';
import { withRouter } from 'react-router-dom';
// import PostShowContainer from "../post/post_show_container"
// import SubpostShowContainer from "../subpost/subpost_show_container"




class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    // this.myFunction = this.myFunction.bind(this);

  }


  handleClick() {
    const postId = this.props.post.id;
    this.props.history.push(`/${postId}`);
  }

  // myFunction() {
  //   <SubpostShowContainer/>
  // }

  render() {
    const { title, body, photo } = this.props.post;
    // console.log(photo)
    let insertPhoto;
    if (photo) {
      insertPhoto = (
        <div className="index-item-photo"><img src={photo}/></div>
      )
    }
    // debugger
    // if (this.props.user === undefined) debugger
    return (
      <div>
      <div
        className="post-index-item">
        <div className="index-item-info" onClick={this.handleClick}>
          {insertPhoto}
          <div className="index-item-title" >{title}</div>
          <div className="index-item-body">{body}</div>
        </div>
        <div className="index-item-author">By: {this.props.user.name}</div>
      </div>
      {/* <i class="fas fa-comment-alt"  onclick={this.myFunction}></i> */}

      </div>
    );
  }
}

export default withRouter(PostIndexItem);