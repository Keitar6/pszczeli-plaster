import {
  Action,
  actionCreator,
  ActionWithPayload,
  withMatch
} from "utils/store/store.utils";
import { GENERAL_PROPS_ACTION_TYPES, PathType } from "./generalProp.types";

export type SetPathType = ActionWithPayload<
  GENERAL_PROPS_ACTION_TYPES.SET_PATH,
  PathType
>;

export type ToggleUserMenu =
  Action<GENERAL_PROPS_ACTION_TYPES.TOGGLE_USER_MENU>;

export const toggleUserMenu = withMatch(
  (): ToggleUserMenu =>
    actionCreator(GENERAL_PROPS_ACTION_TYPES.TOGGLE_USER_MENU)
);

export const setPath = withMatch(
  (path: PathType): SetPathType =>
    actionCreator(GENERAL_PROPS_ACTION_TYPES.SET_PATH, path)
);
