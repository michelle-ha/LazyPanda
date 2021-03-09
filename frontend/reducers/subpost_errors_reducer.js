import {
    RECEIVE_SUBPOST_ERRORS,
    RECEIVE_SUBPOST,
    CLEAR_SUBPOST_ERRORS,
  } from '../actions/subpost_actions'
  
  const subpostErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState)
    switch (action.type) {
      case RECEIVE_SUBPOST_ERRORS:
        return action.errors
      case RECEIVE_SUBPOST:
        return []
      case CLEAR_SUBPOST_ERRORS:
        return []
      default:
        return oldState
    }
  }
  
  export default subpostErrorsReducer