import {
  Action,
  actionCreator,
  withMatch
} from "../../utils/store/store.utils";
import USER_ACTION_TYPES from "./user.types";

type ToggleUserMenu = Action<USER_ACTION_TYPES.TOGGLE_USER_MENU>;

export const toggleUserMenu = withMatch(
  (): ToggleUserMenu => actionCreator(USER_ACTION_TYPES.TOGGLE_USER_MENU)
);

export const setUser = withMatch(
  (): ToggleUserMenu => actionCreator(USER_ACTION_TYPES.TOGGLE_USER_MENU)
);