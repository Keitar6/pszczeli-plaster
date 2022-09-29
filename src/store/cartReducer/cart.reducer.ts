import type { AnyAction } from "redux";
import { setCartItems } from "./cart.actions";
import type { CartItem } from "./cart.types";

export type CartState = {
  readonly cartItems: CartItem[];
};

const CART_INITIAL_STATE: CartState = {
  cartItems: []
};

export const cartReducer = (
  state = CART_INITIAL_STATE,
  action = {} as AnyAction
): CartState => {
  if (setCartItems.match(action))
    return {
      ...state,
      cartItems: action.payload
    };

  return state;
};
