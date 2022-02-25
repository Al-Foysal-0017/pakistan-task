import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// import { postsReducer } from "./reducer/posts";
import AuthReducer from "./reducer/auth.reducer";
import { PostReducer } from "./reducer/post.reducer";
const rootReducer = combineReducers({
  post: PostReducer,
  auth: AuthReducer,
});
const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
