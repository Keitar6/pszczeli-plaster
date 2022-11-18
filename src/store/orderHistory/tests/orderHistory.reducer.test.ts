import type { AnyAction } from "redux";
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

  test("Return setDelivery", () => {
    const newAction = orderHistoryReducer(ORDER_HISTORY_INITIAL_STATE, {
      type: ORDER_HISTORY_ACTION_TYPES.SET_DELIVERY,
      payload: "dobry"
    } as AnyAction);
    expect(newAction).toEqual({
      ...ORDER_HISTORY_INITIAL_STATE,
      delivery: "dobry"
    });
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
