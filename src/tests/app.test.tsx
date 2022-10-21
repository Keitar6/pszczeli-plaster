import ComponentsRenderer from "react-test-renderer";
import { Provider } from "react-redux";
import { AppStore } from "../store/store.redux";

import { renderWithProviders } from "../utils/testsMocking/mockStoreProvider";
import { preload } from "../utils/testsMocking/mockPreload";
import App from "../App";
import * as Routing from "../routing";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch
}));

jest.spyOn(Routing, "Routing").mockReturnValue(<p>ELOOOOOO</p>);

describe("App", () => {
  const store = AppStore;
  let preloadUpdate = {
    ...preload,
    generalPropReducer: {
      ...preload["generalPropReducer"],
      isUserMenuOpened: true,
      isSortingInView: false,
      productCardModal: {
        ...preload["generalPropReducer"].productCardModal,
        isProductCardOpened: false
      }
    },
    cartReducer: { ...preload["cartReducer"], isDropdownActive: false }
  };
  const component = renderWithProviders(
    <>
      <App />
    </>,
    {
      preloadedState: {
        ...preloadUpdate
      }
    }
  );
  afterEach(() => {
    component.unmount();
  });

  test("isUserMenuOpened rendered", () => {
    const userModal = component.queryByTestId("userMenuOnClick");
    const cartModal = component.queryByTestId("cartClosingCheck");
    const productDetailsModal = component.queryByTestId(
      "productDetailsClosing"
    );

    expect(userModal).toBeTruthy();
    expect(cartModal).toBeNull();
    expect(productDetailsModal).toBeNull();
  });
  test("isProductCardOpened rendered", () => {
    preloadUpdate = {
      ...preload,
      generalPropReducer: {
        ...preload["generalPropReducer"],
        isUserMenuOpened: false,
        isSortingInView: false,
        productCardModal: {
          ...preload["generalPropReducer"].productCardModal,
          isProductCardOpened: true
        }
      },
      cartReducer: { ...preload["cartReducer"], isDropdownActive: false }
    };

    const component = renderWithProviders(
      <>
        <App />
      </>,
      {
        preloadedState: {
          ...preloadUpdate
        }
      }
    );

    const userModal = component.queryByTestId("userMenuOnClick");
    const cartModal = component.queryByTestId("cartClosingCheck");
    const productDetailsModal = component.queryByTestId(
      "productDetailsClosing"
    );

    expect(userModal).toBeNull();
    expect(cartModal).toBeNull();
    expect(productDetailsModal).toBeTruthy();
  });
  test("isDropdownActive rendered", () => {
    preloadUpdate = {
      ...preload,
      generalPropReducer: {
        ...preload["generalPropReducer"],
        isUserMenuOpened: false,
        isSortingInView: false,
        productCardModal: {
          ...preload["generalPropReducer"].productCardModal,
          isProductCardOpened: false
        }
      },
      cartReducer: { ...preload["cartReducer"], isDropdownActive: true }
    };

    const component = renderWithProviders(
      <>
        <App />
      </>,
      {
        preloadedState: {
          ...preloadUpdate
        }
      }
    );

    const userModal = component.queryByTestId("userMenuOnClick");
    const cartModal = component.queryByTestId("cartClosingCheck");
    const productDetailsModal = component.queryByTestId(
      "productDetailsClosing"
    );

    expect(cartModal).toBeTruthy();
    expect(userModal).toBeNull();
    expect(productDetailsModal).toBeNull();
  });
  test("App - snapshot", () => {
    const homePage = ComponentsRenderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    ).toJSON();
    expect(homePage).toMatchSnapshot();
  });
});
