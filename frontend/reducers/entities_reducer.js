import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import postsReducer from "./posts_reducer";
import subpostsReducer from "./subpost_reducer"
import reviewsReducer from "./reviews_reducer"
import likesReducer from "./likes_reducer"

const entitiesReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  subposts: subpostsReducer,
  reviews: reviewsReducer,
  likes: likesReducer
});

export default entitiesReducer;