import { combineReducers } from "redux";

import sessionErrorsReducer from "./session_errors_reducer";
import postErrorsReducer from "./post_errors_reducer";
import subpostErrorsReducer from "./subpost_errors_reducer";
import reviewErrorsReducer from "./review_errors_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  post: postErrorsReducer,
  subpost: subpostErrorsReducer,
  review: reviewErrorsReducer
});

export default errorsReducer;