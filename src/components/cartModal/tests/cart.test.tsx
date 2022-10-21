import ComponentsRenderer from "react-test-renderer";
import { mockCartItems } from "../../../utils/testsMocking/mockCartItem";
import { CartModal } from "../cart.component";
import { CartCard } from "../cartCard/cartCard.component";

import { renderWithProviders } from "../../../utils/testsMocking/mockStoreProvider";
import { preload } from "../../../utils/testsMocking/mockPreload";

describe("cartModal", () => {
  const component = () =>
    renderWithProviders(
      <>
        <div id="modal"></div>
        <CartModal />
      </>,

      {
        preloadedState: {
          ...preload
        }
      }
    );

  test("cartCard", () => {
    const component = ComponentsRenderer.create(
      <CartCard cartItem={mockCartItems[0]} />
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  test("cartModal close", () => {
    const cartClosingCheck = component().getByTestId("cartClosingCheck");
    const spyOnComponent = jest.spyOn(cartClosingCheck, "click");

    expect(cartClosingCheck).toBeTruthy();
    cartClosingCheck.click();

    expect(spyOnComponent).toHaveBeenCalledTimes(1);
  });

  test("cartModal goToCheckout", () => {
    const goToCheckout = component().getByTestId("goToCheckout");
    expect(goToCheckout).toBeTruthy();
    const spyOnComponent = jest.spyOn(goToCheckout, "click");
    goToCheckout.click();

    expect(spyOnComponent).toHaveBeenCalledTimes(1);
  });
});
