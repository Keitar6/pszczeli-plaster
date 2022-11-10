import { createSelector } from "reselect";
import { ReduxState } from "../rootReducer.redux";

export const selectUserReducer = (state: ReduxState) => state.userReducer;

export const selectpPreviousUser = createSelector(
  [selectUserReducer],
  (user) => user.previousUser
);
export const selectCurrentUser = createSelector(
  [selectUserReducer],
  (user) => user.currentUser
);
export const selectCurrentUserData = createSelector(
  [selectUserReducer],
  (user) => user.currentUserDBData
);
export const selectNextUser = createSelector(
  [selectUserReducer],
  (user) => user.nextUser
);

export const selectIsLoadingUser = createSelector(
  [selectUserReducer],
  (user) => user.isLoading
);

export const selectLoginStatus = createSelector(
  [selectUserReducer],
  (user) => user.loginStatus
);

export const selectSort = createSelector(
  [selectUserReducer],
  (userReducer) => userReducer.sort
);
