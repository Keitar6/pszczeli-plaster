import { mockCategories } from "../../../utils/testsMocking/mockCategories";

import {
  fetchCategoriesAsync,
  fetchCategoriesFailed,
  fetchCategoriesStart,
  fetchCategoriesSuccess
} from "../category.action";
import { CATEGORIES_ACTION_TYPES } from "../category.types";

describe("Actions - OrderHistoryReducer", () => {
  test("fetchOrderHistoryStart", () => {
    expect(fetchCategoriesStart()).toEqual({
      type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START
    });
  });

  test("fetchOrderHistorySuccess", () => {
    expect(fetchCategoriesSuccess(mockCategories)).toEqual({
      payload: mockCategories,
      type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS
    });
  });
  test("fetchOrderHistoryFailed", () => {
    const error: Error = new Error();
    expect(fetchCategoriesFailed(error)).toEqual({
      type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
      payload: error
    });
  });
  test("postOrderHistoryStart", () => {
    expect(fetchCategoriesStart()).toEqual({
      type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START
    });
  });

  test("postOrderHistorySuccess", () => {
    expect(fetchCategoriesSuccess(mockCategories)).toEqual({
      payload: mockCategories,
      type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS
    });
  });
  test("postOrderHistoryFailed", () => {
    const error: Error = new Error();
    expect(fetchCategoriesFailed(error)).toEqual({
      type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
      payload: error
    });
  });

  // test("orderHistoryCategoriesAsync", () => {
  //   expect(fetchCategoriesAsync()).toEqual({
  //     type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
  //     payload: []
  //   });
  // });
});
