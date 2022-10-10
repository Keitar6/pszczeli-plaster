import type { AnyAction } from "redux";
import {
  fetchOrderHistoryFailed,
  fetchOrderHistoryStart,
  fetchOrderHistorySuccess,
  setDelivery
} from "./orderHistory.action";

import { DeliveryType, Order } from "./orderHistory.types";

export type OrderHistoryState = {
  readonly delivery: DeliveryType;
  readonly orderHistory: Order[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const ORDER_HISTORY_INITIAL_STATE: OrderHistoryState = {
  delivery: {
    price: 0,
    type: "None"
  },
  orderHistory: [],
  isLoading: false,
  error: null
};

export const orderHistoryReducer = (
  state = ORDER_HISTORY_INITIAL_STATE,
  action = {} as AnyAction
): OrderHistoryState => {

  if (setDelivery.match(action))
  return {
    ...state,
    delivery: action.payload
  };

  if (fetchOrderHistoryStart.match(action)) {
    return { ...state, isLoading: true };
  }

  if (fetchOrderHistorySuccess.match(action)) {
    return { ...state, orderHistory: action.payload, isLoading: false };
  }

  if (fetchOrderHistoryFailed.match(action)) {
    return { ...state, error: action.payload, isLoading: false };
  }

  return state;
};
