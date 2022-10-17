import type { AnyAction } from "redux";
import { toggleCartMenu } from "../cart.actions";
import { cartReducer, CART_INITIAL_STATE } from "../cart.reducer";
import { CART_ACTION_TYPES } from "../cart.types";

describe("Actions - CartReducer", () => {
  test("addCartItem", () => {
    const newAction = cartReducer(CART_INITIAL_STATE, {} as AnyAction);
    expect(newAction).toEqual(CART_INITIAL_STATE);
  });

  test("removeCartItem", () => {});

  test("addItemToCart", () => {});
  test("removeItemFromCart", () => {});
  test("setCartItems", () => {});

  test("toggleCartMenu", () => {
    expect(toggleCartMenu()).toEqual({
      type: CART_ACTION_TYPES.TOGGLE_CART_MENU
    });
  });
});
