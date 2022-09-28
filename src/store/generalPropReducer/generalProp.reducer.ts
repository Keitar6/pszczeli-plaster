import type { AnyAction } from "redux";
import { setPath } from "./generalProp.actions";
import { PathType } from "./generalProp.types";

export type GeneralPropsState = {
  theme: {
    type: string;
    color: string;
  };
  path: PathType;
};

const GENERAL_PROPS_INITIAL_STATE: GeneralPropsState = {
  theme: {
    type: "default",
    color: "#f06d06"
  },
  path: ""
};

export const generalPropReducer = (
  state = GENERAL_PROPS_INITIAL_STATE,
  action: AnyAction
) => {
  if (setPath.match(action))
    return {
      ...state,
      path: action.payload
    };

  return state;
};
