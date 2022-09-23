import { actionCreator, withMatch } from "../../utils/store/store.utils";
import { CATEGORIES_ACTION_TYPES, Category } from "./category.types";
import { Action, ActionWithPayload } from "../../utils/store/store.utils";
import { readCategories } from "../../service/service";
import { Dispatch } from "react";
import { AnyAction } from "redux";

export type FetchCategoriesStart =
  Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
  Category[]
>;

export type FetchCategoriesFailed = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
  Error
>;

// For reducer
export type CategoryAction =
  | FetchCategoriesStart
  | FetchCategoriesSuccess
  | FetchCategoriesFailed;

export const fetchCategoriesStart = withMatch(
  (): FetchCategoriesStart =>
    actionCreator(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)
);

export const fetchCategoriesSuccess = withMatch(
  (categoriesArray: Category[]): FetchCategoriesSuccess =>
    actionCreator(
      CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
      categoriesArray
    )
);

export const fetchCategoriesFailed = withMatch(
  (error: Error): FetchCategoriesFailed =>
    actionCreator(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)
);

export const fetchCategoriesAsync =
  () => async (dispatch: Dispatch<AnyAction>) => {
    dispatch(fetchCategoriesStart());
    try {
      const categories = await readCategories("categories");
      dispatch(fetchCategoriesSuccess(categories));
    } catch (error) {
      dispatch(fetchCategoriesFailed(error as Error));
    }
  };
