import { selectCartCount } from "store/cartReducer/cart.selector";
import { useAppSelector } from "hooks/hooks";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./cartIcon.styles";

const CartIcon = () => {
  const quantity= useAppSelector(selectCartCount)
  return (
    <CartIconContainer >
      <ShoppingIcon />
      <ItemCount>{quantity}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
