import React from 'react';
import PostIndexItem from './post_index_item_container';
// import ReviewShowContainer from "../review/review_show_container"
import {Search} from "./post_search"


class PostIndex extends React.Component {
  componentDidMount() {
    this.props.requestPosts();
  }

  render() {
    const users = this.props.users;

    const postIndexItems = this.props.posts.map(post => (
      <PostIndexItem
        key={post.id}
        post={post}
        user={users[post.author_id]}

        />

      )
    );


    return(
      <div className="post-index">
        <Search posts={this.props.posts}/>
        <ul className="post-list">
          <div>{postIndexItems}</div> 
        </ul>
        {/* <ReviewShowContainer post={this.props.post}/> */}
      </div>
    );
  }
}

export default PostIndex;