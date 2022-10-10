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

export const CartCard = ({ cartItem }: CartItemProps) => {
  const { name, quantity, price, image } = cartItem;

  return (
    <CartItemContainer>
      <Image
        src={`/dataBaseImages/${image}`}
        alt={`Obraz: ${name}`}
      />
      <ItemDetails>
        <Name>{name}</Name>
        <Price>{`${quantity} x ${price} = ${quantity * price}zł`}</Price>
      </ItemDetails>
    </CartItemContainer>
  );
};
