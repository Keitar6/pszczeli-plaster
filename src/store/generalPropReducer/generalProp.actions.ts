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

export type SetViewLimiter = ActionWithPayload<
  GENERAL_PROPS_ACTION_TYPES.SET_VIEW_LIMITER,
  number
>;

export const toggleUserMenu = withMatch(
  (): ToggleUserMenu =>
    actionCreator(GENERAL_PROPS_ACTION_TYPES.TOGGLE_USER_MENU)
);

export const setPath = withMatch(
  (path: PathType): SetPathType =>
    actionCreator(GENERAL_PROPS_ACTION_TYPES.SET_PATH, path)
);

export const setViewLimiter = withMatch(
  (step: number): SetViewLimiter =>
    actionCreator(GENERAL_PROPS_ACTION_TYPES.SET_VIEW_LIMITER, step)
);

export const incrementViewLimiter = withMatch(
  (currentViewLimiter: number, step = 10): SetViewLimiter =>
    setViewLimiter(step + currentViewLimiter)
);

export const resetViewLimiter = withMatch(
  (): SetViewLimiter => setViewLimiter(2)
);
