import USER_ACTION_TYPES from "./user.types";

const INITIAL_STATE = {
  user: {},
  isUserMenuOpened:false
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case USER_ACTION_TYPES.TOGGLE_USER_MENU:
      return {
        ...state,
      isUserMenuOpened: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
