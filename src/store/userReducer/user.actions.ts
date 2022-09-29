import {
  Action,
  actionCreator,
  withMatch
} from "../../utils/store/store.utils";
import { USER_ACTION_TYPES } from "./user.types";

export type ToggleUserMenu = Action<USER_ACTION_TYPES.TOGGLE_USER_MENU>;

export type ToggleSortingAscending =
  Action<USER_ACTION_TYPES.TOGGLE_SORTING_ASCENDING>;

export const toggleUserMenu = withMatch(
  (): ToggleUserMenu => actionCreator(USER_ACTION_TYPES.TOGGLE_USER_MENU)
);

export const toggleSortingAscending = withMatch(
  (): ToggleSortingAscending =>
    actionCreator(USER_ACTION_TYPES.TOGGLE_SORTING_ASCENDING)
);

// export const setUser = withMatch(
//   (): ToggleUserMenu => actionCreator(USER_ACTION_TYPES.SET_USER)
// );
