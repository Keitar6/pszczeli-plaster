import { mockCategories } from "../../../utils/testsMocking/mockCategories";

import {
  fetchCategoriesAsync,
  fetchCategoriesFailed,
  fetchCategoriesStart,
  fetchCategoriesSuccess
} from "../category.action";
import { CATEGORIES_ACTION_TYPES } from "../category.types";

describe("Actions - CategoriesReducer", () => {
  test("fetchCategoriesStart", () => {
    expect(fetchCategoriesStart()).toEqual({
      type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START
    });
  });

  test("fetchCategoriesSuccess", () => {
    expect(fetchCategoriesSuccess(mockCategories)).toEqual({
      payload: mockCategories,
      type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS
    });
  });
  test("fetchCategoriesFailed", () => {
    const error: Error = new Error();
    expect(fetchCategoriesFailed(error)).toEqual({
      type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
      payload: error
    });
  });

  // test("fetchCategoriesAsync", () => {
  //   expect(fetchCategoriesAsync()).toEqual({
  //     type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
  //     payload: []
  //   });
  // });
});
