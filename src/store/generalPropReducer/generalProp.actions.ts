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

export const setPath = withMatch(
  (path: PathType): SetPathType =>
    actionCreator(GENERAL_PROPS_ACTION_TYPES.SET_PATH, path)
);
