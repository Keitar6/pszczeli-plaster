import { ReduxState } from "../../rootReducer.redux";

import { mockStore } from "../../../utils/testsMocking/mockStore";
import {
  selectAllItemsMap,
  selectCategories,
  selectCategoriesMap,
  selectCategoryIfLoading,
  selectCategoryReducer
} from "../category.selector";
import { CATEGORIES_INITIAL_STATE } from "../category.reducer";
import {
  mockAllItemsMap,
  mockCategories,
  mockCategoriesMap
} from "../../../utils/testsMocking/mockCategories";
import { Category } from "../category.types";

describe("Selectors - categories", () => {
  test("selectCategoryReducer", () => {
    expect(selectCategoryReducer(mockStore as ReduxState)).toEqual(
      CATEGORIES_INITIAL_STATE
    );
  });

  test("selectCategories", () => {
    const expectedOutput: Category[] = [];
    expect(selectCategories.resultFunc(CATEGORIES_INITIAL_STATE)).toEqual(
      expectedOutput
    );
  });

  test("selectCategoryIfLoading", () => {
    const expectedOutput = false;
    expect(
      selectCategoryIfLoading.resultFunc(CATEGORIES_INITIAL_STATE)
    ).toEqual(expectedOutput);
  });

  test("selectCategoriesMap", () => {
    const expectedOutput = mockCategoriesMap;
    expect(selectCategoriesMap.resultFunc(mockCategories)).toEqual(
      expectedOutput
    );
  });

  test("selectAllItemsMap", () => {
    const expectedOutput = mockAllItemsMap;
    expect(selectAllItemsMap.resultFunc(mockCategoriesMap)).toEqual(
      expectedOutput
    );
  });
});
