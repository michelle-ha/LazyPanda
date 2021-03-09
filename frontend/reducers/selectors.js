// export const allPosts = ({ posts }) => Object.keys(posts).map(key => posts[key]);

// export const selectPost = ({ posts }, postId) => {
//     return posts[postId]
//   };
  

export const selectPost = ({ posts }, postId) => {
  return posts[postId] || { subpostIds: [] }
}

export const getSubpostsForPost = (state, ownProps) => {
  return Object.values(state.entities.subposts).filter(
    (subpost) => subpost.postId == ownProps.postId
  )
}
