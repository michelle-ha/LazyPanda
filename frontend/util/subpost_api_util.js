export const createSubpost = subpost => {
    return $.ajax({
        url: '/api/subposts',
        method: "POST",
        // data: { subpost }
        data: {subpost},
        // contentType: false,
        // processData: false
    })
}

export const deleteSubpost = subpostId => {
    return $.ajax({
        url: `/api/subposts/${subpostId}`,
        method: "DELETE"
    })
}