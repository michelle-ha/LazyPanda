export const createSubpost = subpost => {
    return $.ajax({
        url: '/api/subposts',
        method: "POST",
        data: { subpost }
        //change later when we want to add pics
    })
}

export const deleteSubpost = subpostId => {
    return $.ajax({
        url: `/api/subposts/${subpostId}`,
        method: "DELETE"
    })
}