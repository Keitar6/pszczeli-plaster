import {
  mockCartItemInArray,
  mockCartItemInArray1Quantity,
  mockCartItemNotInArray,
  mockCartItems
} from "../../../utils/testsMocking/mockCartItem";
import {
  addItemToCart,
  removeItemFromCart,
  toggleCartMenu
} from "../cart.actions";

import { CART_ACTION_TYPES } from "../cart.types";

describe("Actions - CartReducer", () => {
  describe("ActionsHelpers - addCart", () => {
    const mockCartItemsWithMockItem = [...mockCartItems, mockCartItemInArray];
    const mockCartItemsWithMockItem1Quantity = [
      ...mockCartItems,
      mockCartItemInArray1Quantity
    ];
    const mockCartItemsUndefined = undefined;

    test("addCartItem", () => {
      expect(addItemToCart(mockCartItems, mockCartItemNotInArray)).toEqual({
        payload: [...mockCartItems, { ...mockCartItemInArray, quantity: 1 }],
        type: CART_ACTION_TYPES.SET_CART_ITEMS
      });

      expect(
        addItemToCart(mockCartItemsWithMockItem, mockCartItemInArray)
      ).toEqual({
        payload: [...mockCartItems, { ...mockCartItemInArray, quantity: 3 }],
        type: CART_ACTION_TYPES.SET_CART_ITEMS
      });

      expect(
        addItemToCart(mockCartItemsUndefined, mockCartItemInArray)
      ).toEqual({
        payload: [{ ...mockCartItemInArray, quantity: 1 }],
        type: CART_ACTION_TYPES.SET_CART_ITEMS
      });
    });

    test("removeItemFromCart", () => {
      expect(
        removeItemFromCart(
          mockCartItemsWithMockItem,
          mockCartItemInArray,
          "all"
        )
      ).toEqual({
        payload: mockCartItems,
        type: CART_ACTION_TYPES.SET_CART_ITEMS
      });

      expect(
        removeItemFromCart(
          mockCartItemsWithMockItem,
          mockCartItemInArray,
          "asd"
        )
      ).toEqual({
        payload: [
          ...mockCartItems,
          { ...mockCartItemInArray, quantity: mockCartItemInArray.quantity - 1 }
        ],
        type: CART_ACTION_TYPES.SET_CART_ITEMS
      });

      expect(
        removeItemFromCart(
          mockCartItemsWithMockItem1Quantity,
          mockCartItemInArray1Quantity
        )
      ).toEqual({
        payload: [...mockCartItemsWithMockItem1Quantity],
        type: CART_ACTION_TYPES.SET_CART_ITEMS
      });

      expect(
        removeItemFromCart(mockCartItemsUndefined, mockCartItemInArray1Quantity)
      ).toEqual({
        payload: [],
        type: CART_ACTION_TYPES.SET_CART_ITEMS
      });
    });
  });

  test("toggleCartMenu", () => {
    expect(toggleCartMenu()).toEqual({
      type: CART_ACTION_TYPES.TOGGLE_CART_MENU
    });
  });
});
