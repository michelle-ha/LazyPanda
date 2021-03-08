import { RECEIVE_SUBPOST, REMOVE_SUBPOST, RECEIVE_SUBPOSTS } from '../actions/subpost_actions'

import { RECEIVE_POST } from '../actions/post_actions'

const SubpostsReducer = (oldState = {}, action) => {
    
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_SUBPOST:
            return Object.assign({}, oldState, { [action.subpost.id]: action.subpost })
        case RECEIVE_SUBPOSTS:
            return action.subposts
        case REMOVE_SUBPOST:
            // const newState = Object.assign({}, oldState)
            delete newState[action.subpostId]
            return newState
        case RECEIVE_POST:
            return Object.assign({}, action.subposts);
        default:
            return oldState;
    }
}

export default SubpostsReducer;