import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";

const CartIcon = () => {
  return (
    <CartIconContainer /*onClick={cartDropdownHandler}*/>
      <ShoppingIcon />
      <ItemCount>0</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
