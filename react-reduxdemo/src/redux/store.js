import { createStore, applyMiddleware } from "redux";
// import cakeReducer from "./cake/cakeReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "redux-logger";
import { rootReducer } from "./rootReducer";
import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
export default store;

// this store is useless untill we connect this store with
// react app with react-redux library we use a component known as "provider"
