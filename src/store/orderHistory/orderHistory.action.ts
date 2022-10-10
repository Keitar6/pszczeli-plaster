import { readOrderHistory } from "service/service";
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
      console.log(orderHistoryEndPoint);
      dispatch(fetchOrderHistorySuccess(orderHistoryEndPoint.items));
    } catch (error) {
      dispatch(fetchOrderHistoryFailed(error as Error));
    }
  };
};

// export const postOrderHistoryAsync: any = () => {
//   return async (dispatch: any) => {
//     dispatch(postOrderHistoryStart());
//     try {
//       const database = await postNewOrder("NotFakeDatabase");
//       dispatch(postOrderHistorySuccess(database.categories));
//     } catch (error) {
//       dispatch(postOrderHistoryFailed(error as Error));
//     }
//   };
// };
