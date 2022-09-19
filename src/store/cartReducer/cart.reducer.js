import CART_ACTION_TYPES from "./cart.types";

const initialState = {
  total: 0,
  itemsAmount: 0,
  products: [],
};

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case CART_ACTION_TYPES.SET_ITEMS_AMOUNT:
      return {
        ...state,
        itemsAmount: action.payload,
      };

    case CART_ACTION_TYPES.SET_TOTAL_COST:
      return {
        ...state,
        total: action.payload,
      };

    case CART_ACTION_TYPES.SET_PRODUCT_TO_CART:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return { ...state };
  }
}
