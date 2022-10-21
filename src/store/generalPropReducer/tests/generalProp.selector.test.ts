import { ReduxState } from "../../rootReducer.redux";
import {
  GENERAL_PROPS_INITIAL_STATE,
  ProductCardModal
} from "../generalProp.reducer";

import {
  selectCurrentProductCard,
  selectGeneralPropReducer,
  selectIsProductCardOpened,
  selectIsUserMenuOpened,
  selectPath,
  selectProductCardModal,
  selectViewLimiter
} from "../generalProp.selector";
import { mockProductCard } from "../../../utils/testsMocking/mockProductCard";
import { mockStore } from "../../../utils/testsMocking/mockStore";

describe("Selectors - generalProp", () => {
  test("selectGeneralPropReducer", () => {
    expect(selectGeneralPropReducer(mockStore as ReduxState)).toEqual(
      GENERAL_PROPS_INITIAL_STATE
    );
  });

  test("selectIsUserMenuOpened", () => {
    const expectedOutput = false;
    expect(
      selectIsUserMenuOpened.resultFunc(GENERAL_PROPS_INITIAL_STATE)
    ).toEqual(expectedOutput);
  });

  test("selectProductCardModal", () => {
    const expectedOutput: ProductCardModal = mockProductCard;
    expect(
      selectProductCardModal.resultFunc(GENERAL_PROPS_INITIAL_STATE)
    ).toEqual(expectedOutput);
  });
  test("selectIsProductCardOpened", () => {
    const expectedOutput = false;
    expect(selectIsProductCardOpened.resultFunc(mockProductCard)).toEqual(
      expectedOutput
    );
  });

  test("selectCurrentProductCard", () => {
    const expectedOutput = mockProductCard.currentProductCard;
    expect(selectCurrentProductCard.resultFunc(mockProductCard)).toEqual(
      expectedOutput
    );
  });

  test("selectPath", () => {
    const expectedOutput = "sklep";
    expect(selectPath.resultFunc(GENERAL_PROPS_INITIAL_STATE)).toEqual(
      expectedOutput
    );
  });

  test("selectViewLimiter", () => {
    const expectedOutput = 2;
    expect(selectViewLimiter.resultFunc(GENERAL_PROPS_INITIAL_STATE)).toEqual(
      expectedOutput
    );
  });
});
