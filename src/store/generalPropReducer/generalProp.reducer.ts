import type { AnyAction } from "redux";
import { setPath, toggleUserMenu } from "./generalProp.actions";
import { PathType } from "./generalProp.types";

export type GeneralPropsState = {
  theme: {
    type: string;
    color: string;
  };
  path: PathType;
  isUserMenuOpened: boolean
};

const GENERAL_PROPS_INITIAL_STATE: GeneralPropsState = {
  theme: {
    type: "default",
    color: "#f06d06"
  },
  path: "",
  isUserMenuOpened: false,
};

export const generalPropReducer = (
  state = GENERAL_PROPS_INITIAL_STATE,
  action={} as AnyAction
) => {

  if (toggleUserMenu.match(action)) {
    return { ...state, isUserMenuOpened: !state.isUserMenuOpened };
  }

  if (setPath.match(action))
    return {
      ...state,
      path: action.payload
    };

  return state;
};
