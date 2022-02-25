import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// import { postsReducer } from "./reducer/posts";
import AuthReducer from "./reducer/auth.reducer";
import { FetchPosts, PostReducer } from "./reducer/post.reducer";
const rootReducer = combineReducers({
  post: PostReducer,
  auth: AuthReducer,
  allLectures: FetchPosts,
});
const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
