import { renderWithProviders } from "../../utils/testsMocking/mockStoreProvider";

import { UserMenuModal } from "./userMenu.component";
import { GENERAL_PROPS_ACTION_TYPES } from "../../store/generalPropReducer/generalProp.types";
import { preload } from "../../utils/testsMocking/mockPreload";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch
}));

describe("userMenu", () => {
  const component = () =>
    renderWithProviders(
      <>
        <div id="modal"></div>
        <UserMenuModal />
      </>,
      {
        preloadedState: {
          ...preload
        }
      }
    );

  beforeEach(() => {
    mockDispatch.mockClear();
  });

  test("userMenuOnClickHandler", () => {
    const userMenuOnClick = component().getByTestId("userMenuOnClick");
    expect(userMenuOnClick).toBeTruthy();
    const spyOnComponent = jest.spyOn(userMenuOnClick, "click");
    userMenuOnClick.click();
    expect(spyOnComponent).toHaveBeenCalledTimes(1);

    expect(mockDispatch.mock.calls[0][0].type).toEqual(
      GENERAL_PROPS_ACTION_TYPES.TOGGLE_USER_MENU
    );
  });

  test("goToCheckoutHandler", () => {
    const goToCheckout = component().getByTestId("goToCheckout");
    const spyOnComponent = jest.spyOn(goToCheckout, "click");

    expect(goToCheckout).toBeTruthy();
    goToCheckout.click();

    expect(spyOnComponent).toHaveBeenCalledTimes(1);

    expect(mockDispatch.mock.calls[0][0].type).toEqual(
      GENERAL_PROPS_ACTION_TYPES.TOGGLE_USER_MENU
    );
  });

  test("goToOrdersHandler", () => {
    const goToOrders = component().getByTestId("goToOrders");
    expect(goToOrders).toBeTruthy();
    const spyOnComponent = jest.spyOn(goToOrders, "click");
    goToOrders.click();

    expect(spyOnComponent).toHaveBeenCalledTimes(1);
    expect(mockDispatch.mock.calls[0][0].type).toEqual(
      GENERAL_PROPS_ACTION_TYPES.TOGGLE_USER_MENU
    );
  });
});
