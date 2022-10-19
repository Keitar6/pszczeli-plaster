import { ReduxState } from "../../rootReducer.redux";
import { mockStore } from "../../../utils/testsMocking/mockStore";

import { CartState, CART_INITIAL_STATE } from "../cart.reducer";
import {
  selectCartCount,
  selectCartItems,
  selectCartReducer,
  selectCartTotal,
  selectIsCartMenuOpened
} from "../cart.selector";
import { CartItem } from "../cart.types";
import { PersistedState } from "redux-persist/lib/types";

describe("Selectors - cart", () => {
  const mockCartIniState = CART_INITIAL_STATE as CartState & PersistedState;

  test("selectCartReducer", () => {
    expect(selectCartReducer(mockStore as ReduxState)).toEqual(
      CART_INITIAL_STATE
    );
  });

  test("selectCartItems", () => {
    const expectedOutput: CartItem[] = [];
    expect(selectCartItems.resultFunc(mockCartIniState)).toEqual(
      expectedOutput
    );
  });

  test("selectIsCartMenuOpened", () => {
    const expectedOutput = false;
    expect(selectIsCartMenuOpened.resultFunc(mockCartIniState)).toEqual(
      expectedOutput
    );
  });

  test("selectCartTotal", () => {
    const expectedOutput = 0;
    expect(selectCartTotal.resultFunc([])).toEqual(expectedOutput);
  });

  test("selectCartCount", () => {
    const expectedOutput = 0;
    expect(selectCartCount.resultFunc([])).toEqual(expectedOutput);
  });
});
