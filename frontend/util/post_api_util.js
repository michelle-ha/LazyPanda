export const fetchTodos = () => (
    $.ajax({
      method: 'GET',
      url: '/api/posts'
    })
  );
  
  export const fetchTodo = id => (
    $.ajax({
      method: 'GET',
      url: `/api/posts/${id}`,
    })
  );
  
  export const createTodo = post => (
   $.ajax({
      method: 'POST',
      url: '/api/posts',
      data: {post}
    })
  );
  
  export const updateTodo = post => (
    $.ajax({
      method: 'PATCH',
      url: `/api/posts/${post.id}`,
      data: { post }
    })
  );
  
  export const destroyTodo = post => (
    $.ajax({
      method: 'DELETE',
      url: `api/posts/${post.id}`
    })
  );