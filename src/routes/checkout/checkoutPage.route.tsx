import { useAppSelector } from "hooks/hooks";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total
} from "./checkoutPage.styles";
import {
  selectCartItems,
  selectCartTotal
} from "store/cartReducer/cart.selector";
import CheckoutItem from "components/checkoutItem/checkoutItem.component";
import { Outlet } from "react-router-dom";

const CheckoutPage = () => {
  const cartItems = useAppSelector(selectCartItems);
  const totalCost = useAppSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>

        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>

        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>

        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>

        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>

      {cartItems.map((currentItem) => (
        <CheckoutItem
          key={currentItem.id}
          cartItem={currentItem}
        ></CheckoutItem>
      ))}

      <Total>{`Total: $${totalCost}`}</Total>
      <Outlet />
    </CheckoutContainer>
  );
};

export default CheckoutPage;
