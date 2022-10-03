import { FC, PropsWithChildren } from "react";
import { addItemToCart } from "store/cartReducer/cart.actions";
import { selectCartItems } from "store/cartReducer/cart.selector";
import { CategoryItem } from "store/categories/category.types";
import { useAppDispatch, useAppSelector } from "types/hooks/hooks";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  ProductCardPrice,
  ProductCardComponent,
  ProductCardDescription,
  ProductCardName,
  ProductCardImageContainer
} from "./productCard.styles";

type ProductCardProps = CategoryItem;
export const ProductCard: FC<PropsWithChildren<ProductCardProps>> = (
  category
) => {
  const { id, name, dodatki, image, price } = category;

  const cartItems = useAppSelector(selectCartItems);
  const dispatch = useAppDispatch();

  const addProductHandler = () => {
    const productToAdd = { id, dodatki, image, name, price };
    dispatch(addItemToCart(cartItems, productToAdd));
  };

  return (
    <ProductCardComponent>
      <ProductCardImageContainer>
        <img
          src={require(`../../assets/dataBaseImages/${image}`)}
          alt={`Obraz: ${name}`}
        />
        <Button
          buttonType={BUTTON_TYPE_CLASSES.productCard}
          onClick={() => addProductHandler()}
        >
          Add to cart
        </Button>
      </ProductCardImageContainer>

      <ProductCardDescription>
        <ProductCardName>{`${name}`}</ProductCardName>
        <ProductCardPrice>{`$${price}`}</ProductCardPrice>
      </ProductCardDescription>
    </ProductCardComponent>
  );
};
