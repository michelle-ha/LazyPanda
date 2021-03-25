import { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";
import { RECEIVE_POST, RECEIVE_POSTS } from "../actions/post_actions";
import {RECEIVE_SUBPOST} from "../actions/subpost_actions"


const LikesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_LIKE:
            nextState[action.like.id] = action.like
            return nextState;
        case REMOVE_LIKE:
            delete nextState[action.likeId]
            return nextState;
        case RECEIVE_SUBPOST:
            return Object.assign({}, action.subpost.likes);
        case RECEIVE_POST:
            return Object.assign({}, action.post.likes);
        case RECEIVE_POSTS:
            return Object.assign(nextState, action.payload.posts.likes)
        default:
            return oldState;
    }
}

export default LikesReducer;