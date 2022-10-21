import { CART_ACTION_TYPES } from "../../store/cartReducer/cart.types";
import { GENERAL_PROPS_ACTION_TYPES } from "../../store/generalPropReducer/generalProp.types";

import * as Refresh from "../../utils/reusableFunctions/refresh.function";
import { preload } from "../../utils/testsMocking/mockPreload";
import { renderWithProviders } from "../../utils/testsMocking/mockStoreProvider";
import Navigation from "./navigation.route";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch
}));
const refreshSpy = jest.spyOn(Refresh, "refresh");

describe("NaviPath", () => {
  const component = () =>
    renderWithProviders(
      <>
      <div id="modal"></div>
        <Navigation />
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

  test("logoClickHandler", () => {
    const refresh = component().getByTestId("logoClick");
    expect(refresh).toBeTruthy();
    const spyOnComponent = jest.spyOn(refresh, "click");
    refresh.click();

    expect(spyOnComponent).toHaveBeenCalledTimes(1);

    expect(refreshSpy).toHaveBeenCalled();
  });

  test("userMenuOpen", () => {
    const userMenuOpen = component().getByTestId("userMenu");
    expect(userMenuOpen).toBeTruthy();
    const spyOnComponent = jest.spyOn(userMenuOpen, "click");
    userMenuOpen.click();

    expect(spyOnComponent).toHaveBeenCalledTimes(1);
    expect(mockDispatch.mock.calls[0][0].type).toEqual(
      GENERAL_PROPS_ACTION_TYPES.TOGGLE_USER_MENU
    );
  });

  test("cartDropdownOpen", () => {
    const cartDropdownOpen = component().getByTestId("cartDropdown");
    expect(cartDropdownOpen).toBeTruthy();
    const spyOnComponent = jest.spyOn(cartDropdownOpen, "click");
    cartDropdownOpen.click();

    expect(spyOnComponent).toHaveBeenCalledTimes(1);
    expect(mockDispatch.mock.calls[0][0].type).toEqual(
      CART_ACTION_TYPES.TOGGLE_CART_MENU
    );
  });
});
