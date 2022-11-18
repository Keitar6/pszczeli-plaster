import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  addItemToCart,
  removeItemFromCart
} from "../../store/cartReducer/cart.actions";
import { selectCartItems } from "../../store/cartReducer/cart.selector";
import { CartItem } from "../../store/cartReducer/cart.types";

import {
  CheckoutItemContainer,
  RemoveButton,
  Quantity,
  Image,
  Arrow,
  Value,
  Span
} from "./checkoutItem.styles";

type CheckoutItemProps = {
  cartItem: CartItem;
};

export const CheckoutItem: FC<CheckoutItemProps> = ({ cartItem }) => {
  const dispatch = useAppDispatch();
  const { name, quantity, price, image } = cartItem;
  const cartItems = useAppSelector(selectCartItems);

  const addItemHandler = () => {
    dispatch(addItemToCart(cartItems, cartItem));
  };

  const removeItemHandler = () => {
    dispatch(removeItemFromCart(cartItems, cartItem));
  };

  return (
    <CheckoutItemContainer>
      <Image src={`/dataBaseImages/${image}`} alt={`Obraz: ${name}`} />
      <Span>{name}</Span>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <Span>{`${quantity * price}zł`}</Span>
      <RemoveButton
        className="remove-button"
        onClick={() => dispatch(removeItemFromCart(cartItems, cartItem, "all"))}
      >
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};
