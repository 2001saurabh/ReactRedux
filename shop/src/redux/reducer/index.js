import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./ProductReducer";
const reducer = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
});
export default reducer;
