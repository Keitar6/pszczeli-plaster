import ComponentsRenderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { AppStore } from "../../store/store.redux";
import HomePage from "./homePage.route";
import { renderWithProviders } from "../../utils/testsMocking/mockStoreProvider";
import { preload } from "../../utils/testsMocking/mockPreload";
import { waitFor } from "@testing-library/react";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch
}));

describe("HomePage", () => {
  const store = AppStore;

  const component = () =>
    renderWithProviders(
      <>
        <HomePage />
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

  test("snapshot", () => {
    const homePage = ComponentsRenderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </Provider>
    ).toJSON();
    expect(homePage).toMatchSnapshot();
  });
});
