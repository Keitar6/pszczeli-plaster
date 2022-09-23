import { createSelector } from "reselect";
import { ReduxState } from "../rootReducer.redux";
import { CategoriestState } from "./category.reducer";

const selectCategoryReducer = (state:ReduxState): CategoriestState => state.categoriesReducer;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoryIfLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
