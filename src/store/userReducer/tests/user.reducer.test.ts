import type { AnyAction } from "redux";
import {
  mockProductCardModalClosed,
  mockProductCardModalOpened
} from "../../../utils/testsMocking/mockProductCardModal";

import {
  SORTING_TYPES,
  userReducer,
  USER_INITIAL_STATE
} from "../user.reducer";
import { USER_ACTION_TYPES } from "../user.types";

describe("Reducers - UserReducer", () => {
  test("Return default state", () => {
    const newAction = userReducer(USER_INITIAL_STATE, {} as AnyAction);
    expect(newAction).toEqual(USER_INITIAL_STATE);
  });

  test("Return toggleSortingAscending", () => {
    const newAction = userReducer(USER_INITIAL_STATE, {
      type: USER_ACTION_TYPES.TOGGLE_SORTING_ASCENDING
    } as AnyAction);
    expect(newAction).toEqual({
      ...USER_INITIAL_STATE,
      sort: {
        ...USER_INITIAL_STATE.sort,
        ascending: !USER_INITIAL_STATE.sort.ascending
      }
    });
  });

  test("Return setAlphabeticSorting", () => {
    const newAction = userReducer(USER_INITIAL_STATE, {
      type: USER_ACTION_TYPES.SET_SORTING_APLPHABETIC
    } as AnyAction);

    expect(newAction).toEqual({
      ...USER_INITIAL_STATE,
      sort: {
        ...USER_INITIAL_STATE.sort,
        sorType: SORTING_TYPES.ALPHABETIC
      }
    });
  });

  test("Return setPriceSorting", () => {
    const newAction = userReducer(USER_INITIAL_STATE, {
      type: USER_ACTION_TYPES.SET_SORTING_BY_PRICE
    } as AnyAction);

    expect(newAction).toEqual({
      ...USER_INITIAL_STATE,
      sort: {
        ...USER_INITIAL_STATE.sort,
        sorType: SORTING_TYPES.PRICE
      }
    });
  });

  test("Return setInputSorting", () => {
    const newAction = userReducer(USER_INITIAL_STATE, {
      type: USER_ACTION_TYPES.SET_SORTING_INPUT,
      payload: "asdasd"
    } as AnyAction);

    expect(newAction).toEqual({
      ...USER_INITIAL_STATE,
      sort: {
        ...USER_INITIAL_STATE.sort,
        inputSort: "asdasd"
      }
    });
  });

  test("PropsCheck - state undefined", () => {
    const newAction = userReducer(undefined, {
      type: USER_ACTION_TYPES.SET_ORDER_HISTORY
    } as AnyAction);
    expect(newAction).not.toEqual(undefined);
  });

  test("PropsCheck - undefined payload", () => {
    const newAction = userReducer(USER_INITIAL_STATE, undefined);
    expect(newAction).toEqual(USER_INITIAL_STATE);
  });

  test("PropsCheck - wrong action", () => {
    const newAction = userReducer(USER_INITIAL_STATE, {
      type: "ABCDEFG"
    } as AnyAction);
    expect(newAction).toEqual(USER_INITIAL_STATE);
  });
});
