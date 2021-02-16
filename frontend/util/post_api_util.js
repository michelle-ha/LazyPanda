export const fetchPosts = () => (
    $.ajax({
      method: 'GET',
      url: '/api/posts',
    })
  );
  
  export const fetchPost = id => (
    $.ajax({
      method: 'GET',
      url: `/api/posts/${id}`,
    })
  );
  
  export const createPost = post => {
    debugger
   return $.ajax({
      method: 'POST',
      url: '/api/posts',
      data: post,
      contentType: false,
      processData: false
    })
  };
  
  export const updatePost = post => (
    $.ajax({
      method: 'PATCH',
      url: `/api/posts/${post.id}`,
      data: { post }
    })
  );
  
  export const destroyPost = postid => (
    $.ajax({
      method: 'DELETE',
      url: `api/posts/${postid}`
      
    })
  );