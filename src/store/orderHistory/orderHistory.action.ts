import {
  actionCreator,
  ActionWithPayload,
  withMatch
} from "../../utils/store/store.utils";
import {
  DeliveryType,
  DELIVERY_TYPE,
  Order,
  ORDER_HISTORY_ACTION_TYPES
} from "./orderHistory.types";

export type SetDelivery = ActionWithPayload<
  ORDER_HISTORY_ACTION_TYPES.SET_DELIVERY,
  DeliveryType
>;

export const setDelivery = withMatch(
  (deliveryMethod: DeliveryType["type"]): SetDelivery =>
    actionCreator(ORDER_HISTORY_ACTION_TYPES.SET_DELIVERY, {
      type: deliveryMethod,
      price: DELIVERY_TYPE[deliveryMethod]
    })
);

export type SetOrderHistory = ActionWithPayload<
  ORDER_HISTORY_ACTION_TYPES.SET_ORDER_HISTORY,
  Order[]
>;

export type AddOrderToOrderHistory = ActionWithPayload<
  ORDER_HISTORY_ACTION_TYPES.SET_ORDER_HISTORY,
  Order[]
>;

export const setOrderHistory = withMatch(
  (ordersHistory: Order[]): SetOrderHistory =>
    actionCreator(ORDER_HISTORY_ACTION_TYPES.SET_ORDER_HISTORY, ordersHistory)
);

export const addOrderToOrderHistory = withMatch(
  (ordersHistory: Order[], order: Order): AddOrderToOrderHistory =>
    setOrderHistory([...ordersHistory, order])
);
