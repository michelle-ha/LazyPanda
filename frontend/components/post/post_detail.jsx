import React from 'react';


const PostDetail = ({ post }) => {
  return (
    <div>
      <ul className="post-list">
        <li>Title: {post.title}</li>
        <li>Description: {post.body}</li>
        <li>By: {post.author.name}</li>
      </ul>
    </div>
  );
};

export default PostDetail;
