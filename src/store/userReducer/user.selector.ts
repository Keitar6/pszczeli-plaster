import { createSelector } from "reselect";
import { ReduxState } from "../rootReducer.redux";

export const selectUserReducer = (state: ReduxState) => {

  return state.userReducer;
};

export const selectCurrentUser = createSelector(
  [selectUserReducer],
  (user) => user.currentUser
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
