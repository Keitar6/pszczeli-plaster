import { CartItem } from "store/cartReducer/cart.types";

import {
  CartItemContainer,
  Image,
  ItemDetails,
  Name,
  Price
} from "./cartCard.styles";

export type CartItemProps = {
  cartItem: CartItem;
};

const CartMenuCard = ({ cartItem }: CartItemProps) => {
  const { name, quantity, price, image } = cartItem;

  return (
    <CartItemContainer>
      <Image src={image} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <Price className="price">{`${quantity} x ${price} = $${
          quantity * price
        }`}</Price>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartMenuCard;
