import ShopPage from "./shopPage.route";
import ComponentsRenderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { AppStore } from "../../store/store.redux";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch
}));

describe("shopPage", () => {
  const store = AppStore;
  test("shopPage - snapshot", () => {
    const shopPage = ComponentsRenderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <ShopPage />
        </BrowserRouter>
      </Provider>
    ).toJSON();
    expect(shopPage).toMatchSnapshot();
  });
});
