import {
  mockCategoryItem,
  mockCategoryItemArray
} from "../../../utils/testsMocking/mockCategories";
import {
  incrementViewLimiter,
  resetViewLimiter,
  setPath,
  setProductCard,
  showProductCardDetails,
  toggleProductCard,
  toggleUserMenu
} from "../generalProp.actions";
import { GENERAL_PROPS_ACTION_TYPES } from "../generalProp.types";

describe("Actions - GeneralPropReducer", () => {
  test("setProductCard", () => {
    expect(setProductCard(mockCategoryItem)).toEqual({
      payload: {
        isProductCardOpened: true,
        currentProductCard: mockCategoryItem
      },
      type: GENERAL_PROPS_ACTION_TYPES.SET_CURRENT_PRODUCT_CARD
    });
  });

  test("showProductCardDetails", () => {
    expect(
      showProductCardDetails(
        mockCategoryItemArray,
        mockCategoryItemArray[0].name
      )
    ).toEqual({
      payload: {
        isProductCardOpened: true,
        currentProductCard: mockCategoryItemArray[0]
      },
      type: GENERAL_PROPS_ACTION_TYPES.SET_CURRENT_PRODUCT_CARD
    });
  });
  describe("viewLimiter", () => {
    test("incrementViewLimiter", () => {
      expect(incrementViewLimiter(5)).toEqual({
        payload: 15,
        type: GENERAL_PROPS_ACTION_TYPES.SET_VIEW_LIMITER
      });

      expect(incrementViewLimiter(5, 5)).toEqual({
        payload: 10,
        type: GENERAL_PROPS_ACTION_TYPES.SET_VIEW_LIMITER
      });
    });

    test("resetViewLimiter", () => {
      expect(resetViewLimiter()).toEqual({
        payload: 2,
        type: GENERAL_PROPS_ACTION_TYPES.SET_VIEW_LIMITER
      });
    });
  });

  test("setPath", () => {
    expect(setPath("goodPath")).toEqual({
      payload: "goodPath",
      type: GENERAL_PROPS_ACTION_TYPES.SET_PATH
    });
  });
  test("toggleUserMenu", () => {
    expect(toggleUserMenu()).toEqual({
      type: GENERAL_PROPS_ACTION_TYPES.TOGGLE_USER_MENU
    });
  });
  test("toggleProductCard", () => {
    expect(toggleProductCard()).toEqual({
      type: GENERAL_PROPS_ACTION_TYPES.TOGGLE_PRODUCT_CARD_MENU
    });
  });
});
