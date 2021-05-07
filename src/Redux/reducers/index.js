import { combineReducers } from "redux";
import { productsReducer, selectedProductReducer } from "./ProductReducer";

const reducer = combineReducers({
  allProducts: productsReducer,
  selectedProduct: selectedProductReducer,
});

export default reducer;
