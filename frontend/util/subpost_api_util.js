export const createSubpost = subpost => {
    return $.ajax({
        url: `api/posts/${subpost.post_id}/subposts`,
        method: "POST",
        // data: { subpost }
        data: {subpost},
        // contentType: false,
        // processData: false
    })
}

export const deleteSubpost = subpost => {
    return $.ajax({
        url: `/api/posts/${subpost.post_id}/subposts/${subpost}`,
        method: "DELETE"
    })
}