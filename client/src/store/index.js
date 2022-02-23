// import { createStore, applyMiddleware, combineReducers } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { testReducer } from "./reducers/test.reducer";
// const rootReducer = combineReducers({
//   test: testReducer,
// });
// const store = createStore(
//   rootReducer,
//   {},
//   composeWithDevTools(applyMiddleware(thunk))
// );
// export default store;

import { configureStore } from "@reduxjs/toolkit";
import authService from "./services/authService";

const Store = configureStore({
  reducer: {
    [authService.reducerPath]: authService.reducer,
  },
});

export default Store;
