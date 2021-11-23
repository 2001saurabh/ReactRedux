import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import IcecreamReducer from "./iceCream/icecreamReducer";
import UserReducer from "./users/userReducer";

export const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: IcecreamReducer,
  user: UserReducer,
});
