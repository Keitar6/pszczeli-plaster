import { mockOrderHistory } from "../../../utils/testsMocking/mockOrderHistory";
import {
  setDelivery, setOrderHistory
} from "../orderHistory.action";
import {
  DELIVERY_TYPE,
  ORDER_HISTORY_ACTION_TYPES
} from "../orderHistory.types";

describe("Actions - OrderHistoryReducer", () => {

  test("setOrderHistory", () => {
    expect(setOrderHistory(mockOrderHistory)).toEqual({
      payload: mockOrderHistory,
      type: ORDER_HISTORY_ACTION_TYPES.SET_ORDER_HISTORY
    });
  });

  test("setDelivery", () => {
    const deliveryType = "KurierDHL";
    expect(setDelivery(deliveryType)).toEqual({
      type: ORDER_HISTORY_ACTION_TYPES.SET_DELIVERY,
      payload: { type: deliveryType, price: DELIVERY_TYPE[deliveryType] }
    });
  });
});
