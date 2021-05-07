import { combineReducers } from "redux";
import { productsReducer, selectedProductReducer } from "./ProductReducer";

const reducer = combineReducers({
  allProducts: productsReducer,
  product: selectedProductReducer,
});

export default reducer;
