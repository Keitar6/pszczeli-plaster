import { createSelector } from "reselect";
import { ReduxState } from "../rootReducer.redux";
import { OrderHistoryState } from "./orderHistory.reducer";

const selectOrderHistoryReducer = (state: ReduxState): OrderHistoryState =>
  state.orderHistoryReducer;

  export const selectOrderHistory = createSelector(
    [selectOrderHistoryReducer],
    (orderHistoryReducer) => orderHistoryReducer.orderHistory
  );
  
  export const selectDelivery = createSelector(
    [selectOrderHistoryReducer],
    (state) => state.delivery
  );
  