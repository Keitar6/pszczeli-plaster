import { toBeAt } from "jest-location-mock";
import { toggleSortingInView } from "../../../store/generalPropReducer/generalProp.actions";
import { generalPropReducer } from "../../../store/generalPropReducer/generalProp.reducer";
import { USER_ACTION_TYPES } from "../../../store/userReducer/user.types";
import { preload } from "../../../utils/testsMocking/mockPreload";
import { renderWithProviders } from "../../../utils/testsMocking/mockStoreProvider";

import { ShopSorting } from "../shopSorting/shopSorting.component";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch
}));

const mockParamsData = {
  id: "elo"
};

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => mockParamsData
}));

describe("ShopSorting", () => {
  const component = () =>
    renderWithProviders(
      <>
        <ShopSorting />
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

  test("sortTypeOnClickHandler - not rendered", async () => {
    const sortTypeOnClick = component().queryByTestId("sortTypeOnClickApha");
    expect(sortTypeOnClick).toBeNull();
  });

  test("sortTypeOnClickHandler - alpha", async () => {
    component().store.dispatch(toggleSortingInView());

    const sortTypeOnClick = component().getByTestId("sortTypeOnClickApha");
    expect(sortTypeOnClick).toBeTruthy();
    const spyOnComponent = jest.spyOn(sortTypeOnClick, "click");
    sortTypeOnClick.click();

    expect(spyOnComponent).toHaveBeenCalledTimes(1);

    expect(mockDispatch.mock.calls[0][0].type).toEqual(
      USER_ACTION_TYPES.SET_SORTING_APLPHABETIC
    );
  });

  test("sortTypeOnClickHandler - price", async () => {
    component().store.dispatch(toggleSortingInView());
    const sortTypeOnClick = component().getByTestId("sortTypeOnClickPrice");
    expect(sortTypeOnClick).toBeTruthy();
    const spyOnComponent = jest.spyOn(sortTypeOnClick, "click");
    sortTypeOnClick.click();

    expect(spyOnComponent).toHaveBeenCalledTimes(1);

    expect(mockDispatch.mock.calls[0][0].type).toEqual(
      USER_ACTION_TYPES.SET_SORTING_BY_PRICE
    );
  });

  test("ascenIconOnClickHandler", () => {
    const ascenIconOnClick = component().getByTestId("ascenIconOnClick");
    expect(ascenIconOnClick).toBeTruthy();
    const spyOnComponent = jest.spyOn(ascenIconOnClick, "click");
    ascenIconOnClick.click();

    expect(spyOnComponent).toHaveBeenCalledTimes(1);
    expect(mockDispatch.mock.calls[0][0].type).toEqual(
      USER_ACTION_TYPES.TOGGLE_SORTING_ASCENDING
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
          <ShopSorting />
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
