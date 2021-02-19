import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import postsReducer from "./posts_reducer";
import subpostsReducer from "./subpost_reducer"

const entitiesReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  subposts: subpostsReducer

});

export default entitiesReducer;