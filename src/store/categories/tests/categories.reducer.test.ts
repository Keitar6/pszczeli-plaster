import type { AnyAction } from "redux";
import { mockCategories } from "../../../utils/testsMocking/mockCategories";
import { categoriesReducer, CATEGORIES_INITIAL_STATE } from "../category.reducer";
import { CATEGORIES_ACTION_TYPES } from "../category.types";

describe("Reducers - categoriesReducer", () => {
  test("Return default state", () => {
    const newAction = categoriesReducer(CATEGORIES_INITIAL_STATE, {} as AnyAction);
    expect(newAction).toEqual(CATEGORIES_INITIAL_STATE);
  });

  test("Return fetchCategoriesStart", () => {
    const newAction = categoriesReducer(CATEGORIES_INITIAL_STATE, {
      type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START
    } as AnyAction);
    expect(newAction).toEqual({
      ...CATEGORIES_INITIAL_STATE,
      isLoading: true
    })
  });

  test("Return fetchCategoriesSuccess", () => {
    const newAction = categoriesReducer(CATEGORIES_INITIAL_STATE, {
      type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
      payload: mockCategories
    } as AnyAction);
    expect(newAction).toEqual({ ...CATEGORIES_INITIAL_STATE, categories: mockCategories, isLoading:false });
  });

  test("Return fetchCategoriesFailed", () => {
    const newAction = categoriesReducer(CATEGORIES_INITIAL_STATE, {
      type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
      payload: Error
    } as AnyAction);
    expect(newAction).toEqual({ ...CATEGORIES_INITIAL_STATE, error: Error, isLoading:false });
  });


  test("PropsCheck - state undefined", () => {
    const newAction = categoriesReducer(undefined, {
      type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START
    } as AnyAction);
    expect(newAction).not.toEqual(undefined);
  });

  test("PropsCheck - undefined payload", () => {
    const newAction = categoriesReducer(CATEGORIES_INITIAL_STATE, undefined);
    expect(newAction).toEqual(CATEGORIES_INITIAL_STATE);
  });

  test("PropsCheck - wrong action", () => {
    const newAction = categoriesReducer(CATEGORIES_INITIAL_STATE, {
      type: "ABCDEFG"
    } as AnyAction);
    expect(newAction).toEqual(CATEGORIES_INITIAL_STATE);
  });
});
