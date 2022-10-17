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
import { readCategories } from "../../service/service";

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

export const fetchCategoriesAsync: any = () => {
  return async (dispatch: any) => {
    dispatch(fetchCategoriesStart());
    try {
      const categoryEndPoint = await readCategories();
      dispatch(fetchCategoriesSuccess(categoryEndPoint));
      return categoryEndPoint
    } catch (error) {
      dispatch(fetchCategoriesFailed(error as Error));
      return error
    }
  };
};

// const asyncThinkAction: ActionCreator<
//   ThunkAction<Promise<Action>, IState, void>
// > = () => {
//   return async (dispatch: Dispatch<IState>): Promise<Action> => {
//     try {
//       const text = await Api.call();
//       return dispatch({
//         type: SET_TEXT,
//         text
//       });
//     } catch (e) {}
//   };
// };
