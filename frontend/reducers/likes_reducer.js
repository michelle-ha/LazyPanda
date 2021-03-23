import { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";
import { RECEIVE_POST } from "../actions/post_actions";


const LikesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_LIKE:
            nextState[action.like.like.id] = action.like.like
            return nextState;
        case REMOVE_LIKE:
            delete nextState[action.likeId]
            return nextState;
        case RECEIVE_POST:
            if(action.data.likes){
                Object.values(action.data.likes).forEach(like => {
                    nextState[like.id] = like
                })
            }
            return nextState
        default:
            return oldState;
    }
}

export default LikesReducer;