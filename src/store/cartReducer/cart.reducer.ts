import type { AnyAction } from "redux";
import { setCartItems, toggleCartMenu } from "./cart.actions";
import type { CartItem } from "./cart.types";

export type CartState = {
  readonly cartItems: CartItem[];
  readonly isDropdownActive: boolean;
};

export const CART_INITIAL_STATE: CartState = {
  cartItems: [],
  isDropdownActive: false
};

export const cartReducer = (
  state = CART_INITIAL_STATE,
  action = {} as AnyAction
): CartState => {
  // console.log(state)
  // console.log(action)
  if (toggleCartMenu.match(action)) {
    return { ...state, isDropdownActive: !state.isDropdownActive };
  }

  if (setCartItems.match(action))
    return {
      ...state,
      cartItems: action.payload
    };

  return state;
};
