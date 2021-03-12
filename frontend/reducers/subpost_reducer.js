import { RECEIVE_SUBPOST, REMOVE_SUBPOST } from '../actions/subpost_actions'

import { RECEIVE_POST } from '../actions/post_actions'

const SubpostsReducer = (oldState = {}, action) => {
    
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_SUBPOST:
            nextState[action.subpost.subpost.id] = action.subpost.subpost;
            return nextState;
        case REMOVE_SUBPOST:
            delete nextState[action.subpostId];
            return nextState;
        case RECEIVE_POST:
            return Object.assign({}, action.post.subposts);
        default:
            return oldState;
    }
}

export default SubpostsReducer;