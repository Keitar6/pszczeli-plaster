import ComponentsRenderer from "react-test-renderer";
import CartIcon from "./cartIcon.component";

import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import * as redux from "react-redux";

const mockStore = configureStore([]);
const spy = jest.spyOn(redux, "useSelector");

spy.mockReturnValue({ quantity: 2 });

describe("cartIcon", () => {
  let store = mockStore({
    quantity: 2
  });

  beforeEach(() => {
    store = mockStore({
      quantity: 2
    });
  });

  const component = ComponentsRenderer.create(
    <Provider store={store}>
      <CartIcon />
    </Provider>
  );

  test("cartIcon", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
