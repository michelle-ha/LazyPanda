export const fetchPosts = () => (
    $.ajax({
      method: 'GET',
      url: '/api/posts',
    })
  );
  
  export const fetchPost = postId => (
    $.ajax({
      method: 'GET',
      url: `/api/posts/${postId}`,
    })
  );
  
  export const createPost = post => {
   return $.ajax({
      method: 'POST',
      url: '/api/posts',
      data: post,
      contentType: false,
      processData: false
    })
  };
  
  export const updatePost = post => {
    return $.ajax({
      method: 'PATCH',
      url: `/api/posts/${post.get['post[id]']}`,
      data: post,
      contentType: false,
      processData: false
    })
  };
  
  export const destroyPost = postid => (
    $.ajax({
      method: 'DELETE',
      url: `api/posts/${postid}`
    })
  );