import type { AnyAction } from "redux";
import { cartReducer, CART_INITIAL_STATE } from "../cart.reducer";
import { CART_ACTION_TYPES } from "../cart.types";

describe("Reducers - CartReducer", () => {
  test("Return default state", () => {
    const newAction = cartReducer(CART_INITIAL_STATE, {} as AnyAction);
    expect(newAction).toEqual(CART_INITIAL_STATE);
  });

  test("Return toggleCartMenu", () => {
    const newAction = cartReducer(CART_INITIAL_STATE, {
      type: CART_ACTION_TYPES.TOGGLE_CART_MENU
    } as AnyAction);
    expect(newAction).toEqual({
      ...CART_INITIAL_STATE,
      isDropdownActive: !CART_INITIAL_STATE.isDropdownActive
    });
  });

  test("Return setCartItems", () => {
    const newAction = cartReducer(CART_INITIAL_STATE, {
      type: CART_ACTION_TYPES.SET_CART_ITEMS,
      payload: []
    } as AnyAction);
    expect(newAction).toEqual({ ...CART_INITIAL_STATE, cartItems: [] });
  });

  test("PropsCheck - state undefined", () => {
    const newAction = cartReducer(undefined, {
      type: CART_ACTION_TYPES.SET_CART_ITEMS
    } as AnyAction);
    expect(newAction).not.toEqual(undefined);
  });

  test("PropsCheck - undefined payload", () => {
    const newAction = cartReducer(CART_INITIAL_STATE, undefined);
    expect(newAction).toEqual(CART_INITIAL_STATE);
  });

  test("PropsCheck - wrong action", () => {
    const newAction = cartReducer(CART_INITIAL_STATE, {
      type: "ABCDEFG"
    } as AnyAction);
    expect(newAction).toEqual(CART_INITIAL_STATE);
  });
});
