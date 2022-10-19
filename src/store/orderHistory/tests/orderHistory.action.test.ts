import {
  mockOrderHistory,
} from "../../../utils/testsMocking/mockOrderHistory";
import {
  fetchOrderHistoryFailed,
  fetchOrderHistoryStart,
  fetchOrderHistorySuccess,
  postOrderHistoryAsync,
  postOrderHistoryFailed,
  postOrderHistoryStart,
  postOrderHistorySuccess,
  setDelivery
} from "../orderHistory.action";
import {
  DELIVERY_TYPE,
  ORDER_HISTORY_ACTION_TYPES
} from "../orderHistory.types";

describe("Actions - OrderHistoryReducer", () => {
  test("fetchOrderHistoryStart", () => {
    expect(fetchOrderHistoryStart()).toEqual({
      type: ORDER_HISTORY_ACTION_TYPES.FETCH_ORDER_HISTORY_START
    });
  });

  test("fetchOrderHistorySuccess", () => {
    expect(fetchOrderHistorySuccess(mockOrderHistory)).toEqual({
      payload: mockOrderHistory,
      type: ORDER_HISTORY_ACTION_TYPES.FETCH_ORDER_HISTORY_SUCCESS
    });
  });
  test("fetchOrderHistoryFailed", () => {
    const error: Error = new Error();
    expect(fetchOrderHistoryFailed(error)).toEqual({
      type: ORDER_HISTORY_ACTION_TYPES.FETCH_ORDER_HISTORY_FAILED,
      payload: error
    });
  });
  test("postOrderHistoryStart", () => {
    expect(postOrderHistoryStart()).toEqual({
      type: ORDER_HISTORY_ACTION_TYPES.POST_ORDER_HISTORY_START
    });
  });

  test("postOrderHistorySuccess", () => {
    expect(postOrderHistorySuccess()).toEqual({
      type: ORDER_HISTORY_ACTION_TYPES.POST_ORDER_HISTORY_SUCCESS
    });
  });
  test("postOrderHistoryFailed", () => {
    const error: Error = new Error();
    expect(postOrderHistoryFailed(error)).toEqual({
      type: ORDER_HISTORY_ACTION_TYPES.POST_ORDER_HISTORY_FAILED,
      payload: error
    });
  });

  // test("fetchOrderHistoryOrderHistoryAsync", () => {
  //   expect(fetchOrderHistoryAsync()).toEqual();
  // });

  // test("postOrderHistoryOrderHistoryAsync", () => {
  //   console.log(postOrderHistoryAsync(mockOrderHistory, mockOrder));
  //   expect(postOrderHistoryAsync()).toEqual();
  // });

  test("setDelivery", () => {
    const deliveryType = "KurierDHL";
    expect(setDelivery(deliveryType)).toEqual({
      type: ORDER_HISTORY_ACTION_TYPES.SET_DELIVERY,
      payload: { type: deliveryType, price: DELIVERY_TYPE[deliveryType] }
    });
  });
});
