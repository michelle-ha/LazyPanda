import * as LikeAPIUtil from '../util/like_api_util'
import { receiveErrors } from './session_actions';


export const RECEIVE_LIKE = 'RECEIVE_LIKE'
export const REMOVE_LIKE = 'REMOVE_LIKE'

const receiveLike = like => {
    return({
        type: RECEIVE_LIKE,
        like
    })
}

const removeLike = likeId => {
    return({
        type: REMOVE_LIKE,
        likeId
    })
}

export const createLike = (like) => (dispatch) => {
    return (
        LikeAPIUtil.createLike(like)
            .then(
                like => dispatch(receiveLike(like))
                // err => dispatch(receiveErrors(err))
            )
    )
}

export const deleteLike = (likeId) => (dispatch) => {
    return (
        LikeAPIUtil.deleteLike(likeId)
            .then(
                () => dispatch(removeLike(likeId))
                // err => dispatch(receiveErrors(err))
            )
    )
}