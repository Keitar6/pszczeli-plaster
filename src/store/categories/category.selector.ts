import { createSelector } from "reselect";
import { ReduxState } from "../rootReducer.redux";
import { CategoriesState } from "./category.reducer";
import { CategoryItem, CategoryMap } from "./category.types";

const selectCategoryReducer = (state: ReduxState): CategoriesState =>
  state.categoriesReducer;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoryIfLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap => {
    return categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap);
  }
);

export const selectAllItemsMap = createSelector(
  [selectCategoriesMap],
  (categoriesMap): CategoryItem[] => {
    const tempAllItems: CategoryItem[] = [];
    Object.values(categoriesMap).map((value) => {
      tempAllItems.push(...value);
    }, [] as CategoryItem[]);

    return tempAllItems;
  }
);
