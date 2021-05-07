import { ActionTypes } from "../constants/actionTypes";
const initialState = {
  products: [
    {
      title: "Sudipto",
      price: 200,
      id: 1,
    },
  ],
};
export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;

    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return state;

    default:
      return state;
  }
};
