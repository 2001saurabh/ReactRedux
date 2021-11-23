import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import IcecreamReducer from "./iceCream/icecreamReducer";

export const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: IcecreamReducer,
});
