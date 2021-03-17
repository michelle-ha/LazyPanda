import { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";
import { RECEIVE_POST } from "../actions/post_actions";


const LikesReducer = (OldState = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_LIKE:
            nextState[action.like.like.id] = action.like.like
            return nextState;
        case REMOVE_LIKE:
            delete nextState[action.likeId]
            return nextState;
        case RECEIVE_POST:
            return Object.assign(nextState, action.post.likes)
        default:
            return OldState;
    }
}

export default LikesReducer;