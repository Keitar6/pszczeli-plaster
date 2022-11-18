import { CATEGORIES_ACTION_TYPES, Category } from "./category.types";
import {
  Action,
  actionCreator,
  ActionWithPayload,
  withMatch
} from "../../utils/store/store.utils";

import type { ActionCreator, AnyAction } from "redux";
import type { ThunkAction } from "redux-thunk";
import { ReduxState } from "../../store/rootReducer.redux";

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

export type AppThunk<T = void> = ActionCreator<
  ThunkAction<Promise<T>, ReduxState, unknown, AnyAction>
>;

export const fetchCategoriesAsync = (
  categoriesItem:Category[] = []
): any => //ThunkAction<
  // void,
  // any,
  // unknown,
  // AnyAction>
  {
    return async (dispatch: any) => {
      dispatch(fetchCategoriesStart());
      try {
        dispatch(fetchCategoriesSuccess(categoriesItem));
      } catch (error) {
        dispatch(fetchCategoriesFailed(error as Error));
      }
    };
  };

  