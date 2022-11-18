import type { AnyAction } from "redux";
import {
  setDelivery, setOrderHistory
} from "./orderHistory.action";

import { DeliveryType, Order } from "./orderHistory.types";

export type OrderHistoryState = {
  readonly delivery: DeliveryType;
  readonly orderHistory: Order[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const ORDER_HISTORY_INITIAL_STATE: OrderHistoryState = {
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

  if (setOrderHistory.match(action)) {
    return { ...state, orderHistory: action.payload, isLoading: false };
  }


  return state;
};
