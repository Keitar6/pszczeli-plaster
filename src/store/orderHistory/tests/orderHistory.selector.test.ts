import { mockStore } from "../../../utils/testsMocking/mockStore";
import { ReduxState } from "../../rootReducer.redux";
import { ORDER_HISTORY_INITIAL_STATE } from "../orderHistory.reducer";

import {
  selectDelivery,
  selectOrderHistory,
  selectOrderHistoryReducer
} from "../orderHistory.selector";
import { DeliveryType, Order } from "../orderHistory.types";



describe("Selectors - orderHistory", () => {
  test("selectOrderHistoryReducer", () => {
    expect(selectOrderHistoryReducer(mockStore as ReduxState)).toEqual(
      ORDER_HISTORY_INITIAL_STATE
    );
  });

  test("selectOrderHistory", () => {
    const expectedOutput: Order[] = [];
    expect(selectOrderHistory.resultFunc(ORDER_HISTORY_INITIAL_STATE)).toEqual(
      expectedOutput
    );
  });

  test("selectDelivery", () => {
    const expectedOutput: DeliveryType = {
      price: 0,
      type: "None"
    };
    expect(selectDelivery.resultFunc(ORDER_HISTORY_INITIAL_STATE)).toEqual(
      expectedOutput
    );
  });
});
