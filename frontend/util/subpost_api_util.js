export const createSubpost = subpost => {
    return $.ajax({
        url: `api/posts/${subpost.post_id}/subposts`,
        method: "POST",
        data: subpost,
        contentType: false,
        processData: false
    })
}

//change to subpostId? (check other delete actions if needbe)
export const deleteSubpost = subpost => {
    return $.ajax({
        url: `/api/posts/${subpost.post_id}/subposts/${subpost.id}`,
        method: "DELETE"
    })
}

export const updateSubpost = (subpost) => {
    return $.ajax({
      method: `PATCH`,
      url: `/api/posts/${subpost.post_id}/subposts/${subpost.id}`,
      data: subpost,
      contentType: false,
      processData: false
    })
}

export const fetchSubpost = (postId, subpostId) => {
    return $.ajax({
      method: `GET`,
      url: `/api/posts/${postId}/subposts/${subpostId}`,
    })
  }
  
  export const fetchSubposts = (postId) => {
    return $.ajax({
      method: `GET`,
      url: `/api/posts/${postId}/subposts`,
    })
  }