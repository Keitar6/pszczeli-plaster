import ComponentsRenderer from "react-test-renderer";
import { mockCartItems } from "../../../utils/testsMocking/mockCartItem";
import { CartModal } from "../cart.component";
import { CartCard } from "../cartCard/cartCard.component";

describe("cartModal", () => {
  test("cartCard", () => {
    const component = ComponentsRenderer.create(
      <CartCard cartItem={mockCartItems[0]} />
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  // test("cart", () => {
  //   const component = ComponentsRenderer.create(<CartModal />).toJSON();
  //   expect(component).toMatchSnapshot();
  // });
});
