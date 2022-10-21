import { renderWithProviders } from "../../utils/testsMocking/mockStoreProvider";
import { ProductDetailsModal } from "./productDetailsModal.component";
import { GENERAL_PROPS_ACTION_TYPES } from "../../store/generalPropReducer/generalProp.types";
import {
  currentProductCardMock,
  preload
} from "../../utils/testsMocking/mockPreload";
import { CART_ACTION_TYPES } from "../../store/cartReducer/cart.types";
import { mockCartItems2 } from "../../utils/testsMocking/mockCartItem";
const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch
}));

describe("productDetailsModal", () => {
  const component = () =>
    renderWithProviders(
      <>
        <div id="modal"></div>
        <ProductDetailsModal />
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
  test("productDetailsClosingHandler", () => {
    const productDetailsClosing = component().getByTestId(
      "productDetailsClosing"
    );
    expect(productDetailsClosing).toBeTruthy();
    const spyOnComponent = jest.spyOn(productDetailsClosing, "click");
    productDetailsClosing.click();

    expect(spyOnComponent).toHaveBeenCalledTimes(1);
    expect(mockDispatch.mock.calls[0][0].type).toEqual(
      GENERAL_PROPS_ACTION_TYPES.TOGGLE_PRODUCT_CARD_MENU
    );
  });

  test("addProductHandler", () => {
    const addProduct = component().getByTestId("addProduct");
    const spyOnComponent = jest.spyOn(addProduct, "click");

    expect(addProduct).toBeTruthy();
    addProduct.click();

    expect(spyOnComponent).toHaveBeenCalledTimes(1);

    expect(mockDispatch.mock.calls[0][0]).toEqual({
      payload: [...mockCartItems2, currentProductCardMock],
      type: CART_ACTION_TYPES.SET_CART_ITEMS
    });
  });

  test("navigateToCartHandler", () => {
    const navigateToCart = component().getByTestId("navigateToCart");
    expect(navigateToCart).toBeTruthy();
    const spyOnComponent = jest.spyOn(navigateToCart, "click");
    navigateToCart.click();

    expect(spyOnComponent).toHaveBeenCalledTimes(1);
    expect(mockDispatch.mock.calls[0][0].type).toEqual(
      GENERAL_PROPS_ACTION_TYPES.TOGGLE_PRODUCT_CARD_MENU
    );
  });
});
