import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  componentDidMount() {
    this.props.requestPosts();
  }

  render() {

    const { posts, updatePost } = this.props;
    let postIndexItems = posts.map(post => (
      <PostIndexItem
        key={post.id}
        post={post}
        updatePost={updatePost} />
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

// const PostIndex = ({ posts }) => (
//     <div>
//       {posts.map(post => (
//         <PostIndexItem
//           post={post}
//           key={post.id}
//         />
//       ))}
//     </div>
//   );
  
//   export default PostIndex;
  