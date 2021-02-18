import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  componentDidMount() {
    this.props.requestPosts();
  }



  render() {
    // if (!users) return null

    // if (Object.keys(this.props.users).length < 2) {
    //   return null
    // }
// debugger
    const users = this.props.users;

    const postIndexItems = this.props.posts.map(post => (
      <PostIndexItem
        key={post.id}
        post={post}
        // updatePost={updatePost} 
        user={users[post.author_id]}/>
      )
    );
    return(
      <div className="post-index">
        <ul className="post-list">
          <div>{postIndexItems}</div> 
        </ul>
      </div>
    );
  }
}

export default PostIndex;