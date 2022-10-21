import { waitFor } from "@testing-library/react";
import { GENERAL_PROPS_ACTION_TYPES } from "../../store/generalPropReducer/generalProp.types";

import { preload } from "../../utils/testsMocking/mockPreload";
import { renderWithProviders } from "../../utils/testsMocking/mockStoreProvider";
import OrdersPage from "./ordersPage.route";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch
}));

describe("OrdersPage", () => {
  const component = () =>
    renderWithProviders(
      <>
        <OrdersPage />
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

  test("useEffect", async () => {
    component();

    await waitFor(() => {
      expect(mockDispatch.mock.calls).not.toEqual([]);
    });
  });

  test("moreHistoryHandler rendered", () => {
    const moreHistoryPaginationButton =
      component().getByTestId("paginationButton");
    expect(moreHistoryPaginationButton).toBeTruthy();
    const spyOnComponent = jest.spyOn(moreHistoryPaginationButton, "click");
    moreHistoryPaginationButton.click();

    expect(spyOnComponent).toHaveBeenCalledTimes(1);
    expect(mockDispatch.mock.calls[1][0].type).toEqual(
      GENERAL_PROPS_ACTION_TYPES.SET_VIEW_LIMITER
    );
  });

  test("moreHistoryHandler not rendered", () => {
    const preloadUpdate = {
      ...preload,
      generalPropReducer: { ...preload["generalPropReducer"], viewLimiter: 15 }
    };

    const componentAS = () =>
      renderWithProviders(
        <>
          <OrdersPage />
        </>,
        {
          preloadedState: {
            ...preloadUpdate
          }
        }
      );

    const moreHistoryPaginationButton =
      componentAS().queryByTestId("paginationButton");
    expect(moreHistoryPaginationButton).toBe(null);
  });
});
