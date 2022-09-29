import { selectCartCount } from "store/cartReducer/cart.selector";
import { useAppSelector } from "types/hooks/hooks";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";

const CartIcon = () => {
  const quantity= useAppSelector(selectCartCount)
  return (
    <CartIconContainer /*onClick={cartDropdownHandler}*/>
      <ShoppingIcon />
      <ItemCount>{quantity}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
