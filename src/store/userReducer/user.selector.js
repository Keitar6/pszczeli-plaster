import { createSelector } from "reselect";

export const selectUserReducer = (state) => state.userReducer;

export const selectIsUserMenuOpened=createSelector([selectUserReducer],(userReducer)=>userReducer.isUserMenuOpened)