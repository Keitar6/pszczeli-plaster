import { createSelector } from "reselect";
import { ReduxState } from "../rootReducer.redux";
import { CategoriesState } from "./category.reducer";

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
