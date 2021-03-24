import React from 'react';
import PostIndexItem from './post_index_item';
// import ReviewShowContainer from "../review/review_show_container"


class PostIndex extends React.Component {

  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.requestPosts();
  }

  // componentDidUpdate(prevProps) {

  //   if (this.props.likes !== prevProps.likes) {
  //       this.props.requestPosts()
  //   }
  // }

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
        <ul className="post-list">
          <div>{postIndexItems}</div> 
        </ul>
        {/* <ReviewShowContainer post={this.props.post}/> */}
      </div>
    );
  }
}

export default PostIndex;