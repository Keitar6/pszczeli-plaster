import {
  setAlphabeticSorting,
  setInputSorting,
  setPriceSorting,
  toggleSortingAscending
} from "../user.actions";

import { USER_ACTION_TYPES } from "../user.types";

describe("Actions - UserReducer", () => {
  test("toggleSortingAscending", () => {
    expect(toggleSortingAscending()).toEqual({
      type: USER_ACTION_TYPES.TOGGLE_SORTING_ASCENDING
    });
  });

  test("setPriceSorting", () => {
    expect(setPriceSorting()).toEqual({
      type: USER_ACTION_TYPES.SET_SORTING_BY_PRICE
    });
  });

  test("setAlphabeticSorting", () => {
    expect(setAlphabeticSorting()).toEqual({
      type: USER_ACTION_TYPES.SET_SORTING_APLPHABETIC
    });
  });

  test("setInputSorting", () => {
    expect(setInputSorting("input")).toEqual({
      type: USER_ACTION_TYPES.SET_SORTING_INPUT,
      payload: "input"
    });
  });
});
