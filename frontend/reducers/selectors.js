export const allPosts = ({ posts }) => Object.keys(posts).map(key => posts[key]);

export const selectPost = ({ posts }, postId) => {
    return posts[postId]
  };
  