import GENERAL_PROPS_ACTION_TYPES from "./generalProp.types";

const INITIAL_STATE = {
  theme: {
    type: "default",
    color: "#f06d06"
  },
  sortType: "default",
};

export const generalPropReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GENERAL_PROPS_ACTION_TYPES.SET_THEME:
      return {
        ...state,
        theme: action.payload
      };

    case GENERAL_PROPS_ACTION_TYPES.SET_SORTING_TYPE:
      return {
        ...state,
        sortType: action.payload
      };

    case GENERAL_PROPS_ACTION_TYPES.TOGGLE_USER_MENU:
      return {
        ...state,
        isModalActive: !state.isModalActive
      };

    default:
      return state;
  }
};
