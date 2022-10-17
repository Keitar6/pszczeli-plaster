import type { AnyAction } from "redux";
import { mockOrderHistory } from "../../../utils/testsMocking/mockOrderHistory";
import {
  orderHistoryReducer,
  ORDER_HISTORY_INITIAL_STATE
} from "../orderHistory.reducer";
import { ORDER_HISTORY_ACTION_TYPES } from "../orderHistory.types";

describe("Reducers - orderHistoryReducer", () => {
  test("Return default state", () => {
    const newAction = orderHistoryReducer(
      ORDER_HISTORY_INITIAL_STATE,
      {} as AnyAction
    );
    expect(newAction).toEqual(ORDER_HISTORY_INITIAL_STATE);
  });

  test("Return fetchOrderHistoryStart", () => {
    const newAction = orderHistoryReducer(ORDER_HISTORY_INITIAL_STATE, {
      type: ORDER_HISTORY_ACTION_TYPES.FETCH_ORDER_HISTORY_START
    } as AnyAction);
    expect(newAction).toEqual({
      ...ORDER_HISTORY_INITIAL_STATE,
      isLoading: true
    });
  });

  test("Return fetchOrderHistorySuccess", () => {
    const newAction = orderHistoryReducer(ORDER_HISTORY_INITIAL_STATE, {
      type: ORDER_HISTORY_ACTION_TYPES.FETCH_ORDER_HISTORY_SUCCESS,
      payload: mockOrderHistory
    } as AnyAction);
    expect(newAction).toEqual({
      ...ORDER_HISTORY_INITIAL_STATE,
      orderHistory: mockOrderHistory,
      isLoading: false
    });
  });

  test("Return fetchOrderHistoryFailed", () => {
    const newAction = orderHistoryReducer(ORDER_HISTORY_INITIAL_STATE, {
      type: ORDER_HISTORY_ACTION_TYPES.FETCH_ORDER_HISTORY_FAILED,
      payload: Error
    } as AnyAction);
    expect(newAction).toEqual({
      ...ORDER_HISTORY_INITIAL_STATE,
      error: Error,
      isLoading: false
    });
  });
  test("Return setDelivery", () => {
    const newAction = orderHistoryReducer(ORDER_HISTORY_INITIAL_STATE, {
      type: ORDER_HISTORY_ACTION_TYPES.SET_DELIVERY,
      payload: 'dobry'
    } as AnyAction);
    expect(newAction).toEqual({
      ...ORDER_HISTORY_INITIAL_STATE,
      delivery: 'dobry'
    });
  });

  test("PropsCheck - state undefined", () => {
    const newAction = orderHistoryReducer(undefined, {
      type: ORDER_HISTORY_ACTION_TYPES.FETCH_ORDER_HISTORY_START
    } as AnyAction);
    expect(newAction).not.toEqual(undefined);
  });

  test("PropsCheck - undefined payload", () => {
    const newAction = orderHistoryReducer(
      ORDER_HISTORY_INITIAL_STATE,
      undefined
    );
    expect(newAction).toEqual(ORDER_HISTORY_INITIAL_STATE);
  });

  test("PropsCheck - wrong action", () => {
    const newAction = orderHistoryReducer(ORDER_HISTORY_INITIAL_STATE, {
      type: "ABCDEFG"
    } as AnyAction);
    expect(newAction).toEqual(ORDER_HISTORY_INITIAL_STATE);
  });
});
