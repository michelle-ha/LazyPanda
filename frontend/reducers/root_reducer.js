import { combineReducers } from 'redux';
import entities from './entities_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import ui from './ui_reducer';


const rootReducer = combineReducers({
    entities: entities,
    session: session,
    errors: errors,
    ui: ui
  });
  
  export default rootReducer;