import { postNewOrder, readOrderHistory } from "service/service";
import {
  Action,
  actionCreator,
  ActionWithPayload,
  withMatch
} from "utils/store/store.utils";
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

export type FetchOrderHistoryStart =
  Action<ORDER_HISTORY_ACTION_TYPES.FETCH_ORDER_HISTORY_START>;

export type FetchOrderHistorySuccess = ActionWithPayload<
  ORDER_HISTORY_ACTION_TYPES.FETCH_ORDER_HISTORY_SUCCESS,
  Order[]
>;

export type FetchOrderHistoryFailed = ActionWithPayload<
  ORDER_HISTORY_ACTION_TYPES.FETCH_ORDER_HISTORY_FAILED,
  Error
>;

export const fetchOrderHistoryStart = withMatch(
  (): FetchOrderHistoryStart =>
    actionCreator(ORDER_HISTORY_ACTION_TYPES.FETCH_ORDER_HISTORY_START)
);

export const fetchOrderHistorySuccess = withMatch(
  (ordersHistory: Order[]): FetchOrderHistorySuccess =>
    actionCreator(
      ORDER_HISTORY_ACTION_TYPES.FETCH_ORDER_HISTORY_SUCCESS,
      ordersHistory
    )
);

export const fetchOrderHistoryFailed = withMatch(
  (error: Error): FetchOrderHistoryFailed =>
    actionCreator(ORDER_HISTORY_ACTION_TYPES.FETCH_ORDER_HISTORY_FAILED, error)
);

export const fetchOrderHistoryAsync: any = () => {
  return async (dispatch: any) => {
    dispatch(fetchOrderHistoryStart());
    try {
      const orderHistoryEndPoint = await readOrderHistory();
      dispatch(fetchOrderHistorySuccess(orderHistoryEndPoint));
    } catch (error) {
      dispatch(fetchOrderHistoryFailed(error as Error));
    }
  };
};

export type PostOrderHistoryStart =
  Action<ORDER_HISTORY_ACTION_TYPES.POST_ORDER_HISTORY_START>;

export type PostOrderHistorySuccess =
  Action<ORDER_HISTORY_ACTION_TYPES.POST_ORDER_HISTORY_SUCCESS>;

export type PostOrderHistoryFailed = ActionWithPayload<
  ORDER_HISTORY_ACTION_TYPES.POST_ORDER_HISTORY_FAILED,
  Error
>;

export const postOrderHistoryStart = withMatch(
  (): PostOrderHistoryStart =>
    actionCreator(ORDER_HISTORY_ACTION_TYPES.POST_ORDER_HISTORY_START)
);

export const postOrderHistorySuccess = withMatch(
  (): PostOrderHistorySuccess =>
    actionCreator(ORDER_HISTORY_ACTION_TYPES.POST_ORDER_HISTORY_SUCCESS)
);

export const postOrderHistoryFailed = withMatch(
  (error: Error): PostOrderHistoryFailed =>
    actionCreator(ORDER_HISTORY_ACTION_TYPES.POST_ORDER_HISTORY_FAILED, error)
);

export const postOrderHistoryAsync: any = (
  orderHistory: Order[],
  order: Order
) => {
  return async (dispatch: any) => {
    const tempOrder = order;
    dispatch(postOrderHistoryStart());
    try {
      const orderHistoryEndPoint = await postNewOrder(tempOrder);
      console.log(orderHistoryEndPoint);
      dispatch(postOrderHistorySuccess());
    } catch (error) {
      dispatch(postOrderHistoryFailed(error as Error));
      console.log(error);
    }
  };
};
