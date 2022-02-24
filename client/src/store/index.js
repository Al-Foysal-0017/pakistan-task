import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { postsReducer } from "./reducer/posts";
import AuthReducer from "./reducer/auth.reducer";
const rootReducer = combineReducers({
  post: postsReducer,
  auth: AuthReducer,
});
const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
