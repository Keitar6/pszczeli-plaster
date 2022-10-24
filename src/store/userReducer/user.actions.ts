import {
  Action,
  actionCreator,
  ActionWithPayload,
  withMatch
} from "../../utils/store/store.utils";
import { UserState } from "./user.reducer";

import { USER_ACTION_TYPES } from "./user.types";

export type ToggleSortingAscending =
  Action<USER_ACTION_TYPES.TOGGLE_SORTING_ASCENDING>;

export type SetPriceSorting = Action<USER_ACTION_TYPES.SET_SORTING_BY_PRICE>;

export type SetAlphabeticSorting =
  Action<USER_ACTION_TYPES.SET_SORTING_APLPHABETIC>;

export type SetInputSorting = ActionWithPayload<
  USER_ACTION_TYPES.SET_SORTING_INPUT,
  string
>;

export type SetUser = ActionWithPayload<
  USER_ACTION_TYPES.SET_USER,
  UserState["currentUser"]
>;

export const toggleSortingAscending = withMatch(
  (): ToggleSortingAscending =>
    actionCreator(USER_ACTION_TYPES.TOGGLE_SORTING_ASCENDING)
);

export const setPriceSorting = withMatch(
  (): SetPriceSorting => actionCreator(USER_ACTION_TYPES.SET_SORTING_BY_PRICE)
);

export const setAlphabeticSorting = withMatch(
  (): SetAlphabeticSorting =>
    actionCreator(USER_ACTION_TYPES.SET_SORTING_APLPHABETIC)
);

export const setInputSorting = withMatch(
  (input: string): SetInputSorting =>
    actionCreator(USER_ACTION_TYPES.SET_SORTING_INPUT, input)
);

export const setUser = withMatch(
  (user): SetUser => actionCreator(USER_ACTION_TYPES.SET_USER, user)
);
