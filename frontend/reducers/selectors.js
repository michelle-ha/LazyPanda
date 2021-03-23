export const allPosts = ({ posts }) => Object.keys(posts).map(key => posts[key]);

export const selectPost = ({ posts }, postId) => {
    return posts[postId]
  };
  
// export const getLikes = (likes, likeable_id, likeable_type) => {
//   let result = [];
//   for (let id in likes) {
//       if (likes[id].likeable_id === parseInt(likeable_id) && likes[id].likeable_type === likeable_type){
//           result.push(likes[id]);
//       }
//   }
//   return result;
// }

export const findLike = (likes, likeable_id, likeable_type, author_id) => {
  for (let id in likes) {
      let like = likes[id];
      if(
          like.likeable_id === likeable_id &&
          like.likeable_type === likeable_type && 
          like.author_id === author_id
      ){
          return like;
      }
  }
  return false;
}

export const getLikes = (likes, likeable_id, likeable_type) => {
  let result = [];
  for (let id in likes) {
      if (likes[id].likeable_id === parseInt(likeable_id) && likes[id].likeable_type === likeable_type){
          result.push(likes[id]);
      }
  }
  return result;
}

// export const getLikesFromSubposts = (likes, subpostArray) => {
//   let result = [];
//   for (let id in likes) {
//       if(subpostArray.includes(likes[id].likeable_id) && likes[id].likeable_type === 'Subpost' ){
//           result.push(likes[id])
//       }
//   }
//   return result;
// }