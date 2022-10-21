import type { AnyAction } from "redux";
import {
  mockProductCardModalClosed,
  mockProductCardModalOpened
} from "../../../utils/testsMocking/mockProductCardModal";
import {
  generalPropReducer,
  GENERAL_PROPS_INITIAL_STATE
} from "../generalProp.reducer";
import { GENERAL_PROPS_ACTION_TYPES } from "../generalProp.types";

describe("Reducers - GeneralPropReducer", () => {
  test("Return default state", () => {
    const newAction = generalPropReducer(
      GENERAL_PROPS_INITIAL_STATE,
      {} as AnyAction
    );
    expect(newAction).toEqual(GENERAL_PROPS_INITIAL_STATE);
  });

  test("Return toggleUserMenu", () => {
    const newAction = generalPropReducer(GENERAL_PROPS_INITIAL_STATE, {
      type: GENERAL_PROPS_ACTION_TYPES.TOGGLE_USER_MENU
    } as AnyAction);
    expect(newAction).toEqual({
      ...GENERAL_PROPS_INITIAL_STATE,
      isUserMenuOpened: !GENERAL_PROPS_INITIAL_STATE.isUserMenuOpened
    });
  });

  test("Return toggleProductCard", () => {
    const newAction = generalPropReducer(GENERAL_PROPS_INITIAL_STATE, {
      type: GENERAL_PROPS_ACTION_TYPES.TOGGLE_PRODUCT_CARD_MENU
    } as AnyAction);

    expect(newAction).toEqual({
      ...GENERAL_PROPS_INITIAL_STATE,
      productCardModal: {
        ...GENERAL_PROPS_INITIAL_STATE.productCardModal,
        isProductCardOpened:
          !GENERAL_PROPS_INITIAL_STATE.productCardModal.isProductCardOpened
      }
    });
  });

  test("Return setProductCard", () => {
    const newActionClosed = generalPropReducer(GENERAL_PROPS_INITIAL_STATE, {
      type: GENERAL_PROPS_ACTION_TYPES.SET_CURRENT_PRODUCT_CARD,
      payload: mockProductCardModalClosed
    } as AnyAction);

    const newActionOpened = generalPropReducer(GENERAL_PROPS_INITIAL_STATE, {
      type: GENERAL_PROPS_ACTION_TYPES.SET_CURRENT_PRODUCT_CARD,
      payload: mockProductCardModalOpened
    } as AnyAction);
    expect(newActionClosed).toEqual({
      ...GENERAL_PROPS_INITIAL_STATE,
      productCardModal: mockProductCardModalClosed
    });
    expect(newActionOpened).toEqual({
      ...GENERAL_PROPS_INITIAL_STATE,
      productCardModal: mockProductCardModalOpened
    });
  });
  test("Return setPath", () => {
    const newAction = generalPropReducer(GENERAL_PROPS_INITIAL_STATE, {
      type: GENERAL_PROPS_ACTION_TYPES.SET_PATH,
      payload: "/sklep"
    } as AnyAction);

    const newAction2 = generalPropReducer(GENERAL_PROPS_INITIAL_STATE, {
      type: GENERAL_PROPS_ACTION_TYPES.SET_PATH
    } as AnyAction);

    expect(newAction).toEqual({
      ...GENERAL_PROPS_INITIAL_STATE,
      path: "/sklep"
    });

    expect(newAction2).toEqual({
      ...GENERAL_PROPS_INITIAL_STATE,
      path: undefined
    });
  });
  test("Return setViewLimiter", () => {
    const newActionWithPayload = generalPropReducer(
      GENERAL_PROPS_INITIAL_STATE,
      {
        type: GENERAL_PROPS_ACTION_TYPES.SET_VIEW_LIMITER,
        payload: 5
      } as AnyAction
    );

    const newActionWithoutPayload = generalPropReducer(
      GENERAL_PROPS_INITIAL_STATE,
      {
        type: GENERAL_PROPS_ACTION_TYPES.SET_VIEW_LIMITER
      } as AnyAction
    );

    expect(newActionWithPayload).toEqual({
      ...GENERAL_PROPS_INITIAL_STATE,
      viewLimiter: 5
    });

    expect(newActionWithoutPayload).toEqual({
      ...GENERAL_PROPS_INITIAL_STATE,
      viewLimiter: undefined
    });
  });

  test("PropsCheck - state undefined", () => {
    const newAction = generalPropReducer(undefined, {
      type: GENERAL_PROPS_ACTION_TYPES.SET_CURRENT_PRODUCT_CARD
    } as AnyAction);
    expect(newAction).not.toEqual(undefined);
  });

  test("PropsCheck - undefined payload", () => {
    const newAction = generalPropReducer(
      GENERAL_PROPS_INITIAL_STATE,
      undefined
    );
    expect(newAction).toEqual(GENERAL_PROPS_INITIAL_STATE);
  });

  test("PropsCheck - wrong action", () => {
    const newAction = generalPropReducer(GENERAL_PROPS_INITIAL_STATE, {
      type: "ABCDEFG"
    } as AnyAction);
    expect(newAction).toEqual(GENERAL_PROPS_INITIAL_STATE);
  });
});
