import { createStore } from "redux";
import cakeReducer from "./cake/cakeReducer";

const store = createStore(cakeReducer);
export default store;

// this store is useless untill we connect this store with
// react app with react-redux library we use a component known as "provider"
