import { createSelector } from "reselect";
import { ReduxState } from "../rootReducer.redux";

export const selectUserReducer = (state: ReduxState) => state.userReducer;

export const selectCurrentUser = createSelector(
  [selectUserReducer],
  (user) => user.currentUser
);

export const selectSort = createSelector(
  [selectUserReducer],
  (userReducer) => userReducer.sort
);

