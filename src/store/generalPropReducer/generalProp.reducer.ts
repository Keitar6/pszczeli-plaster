import type { AnyAction } from "redux";
import { setPath, setViewLimiter, toggleUserMenu } from "./generalProp.actions";
import { PathType } from "./generalProp.types";

export type GeneralPropsState = {
  theme: {
    type: string;
    color: string;
  };
  path: PathType;
  isUserMenuOpened: boolean;
  viewLimiter: number;
};

const GENERAL_PROPS_INITIAL_STATE: GeneralPropsState = {
  theme: {
    type: "default",
    color: "#f06d06"
  },
  path: "shop",
  isUserMenuOpened: false,
  viewLimiter: 2
};

export const generalPropReducer = (
  state = GENERAL_PROPS_INITIAL_STATE,
  action = {} as AnyAction
): GeneralPropsState => {
  if (toggleUserMenu.match(action)) {
    return { ...state, isUserMenuOpened: !state.isUserMenuOpened };
  }

  if (setPath.match(action))
    return {
      ...state,
      path: action.payload
    };

  if (setViewLimiter.match(action))
    return {
      ...state,
      viewLimiter: action.payload
    };

  return state;
};
