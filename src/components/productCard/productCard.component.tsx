import React, { FC, PropsWithChildren } from "react";
import { addItemToCart } from "../../store/cartReducer/cart.actions";
import { selectCartItems } from "../../store/cartReducer/cart.selector";
import { CategoryItem } from "../../store/categories/category.types";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  ProductCardPrice,
  ProductCardComponent,
  ProductCardDescription,
  ProductCardName,
  ProductCardImageContainer
} from "./productCard.styles";
import { showProductCardDetails } from "../../store/generalPropReducer/generalProp.actions";
import { selectAllItemsMap } from "../../store/categories/category.selector";

type ProductCardProps = CategoryItem;
export const ProductCard: FC<PropsWithChildren<ProductCardProps>> = (
  category
) => {
  const { id, name, dodatki, image, price } = category;

  const cartItems = useAppSelector(selectCartItems);
  const allItemsMap = useAppSelector(selectAllItemsMap);
  const dispatch = useAppDispatch();

  const addProductHandler = () => {
    const productToAdd = dodatki
      ? { id, dodatki, image, name, price }
      : { id, image, name, price };
    dispatch(addItemToCart(cartItems, productToAdd));
  };

  const productDetailsHandler = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {

    dispatch(
      showProductCardDetails(
        allItemsMap,
        (
          event as React.MouseEvent<HTMLDivElement, MouseEvent> & {
            target: { innerText: string };
          }
        ).target.innerText
      )
    );
  };

  return (
    <ProductCardComponent>
      <ProductCardImageContainer>
        <img src={`/dataBaseImages/${image}`} alt={`Obraz: ${name}`} />
        <Button
          buttonType={BUTTON_TYPE_CLASSES.productCard}
          onClick={() => addProductHandler()}
        >
          Dodaj do koszyka
        </Button>
      </ProductCardImageContainer>

      <ProductCardDescription>
        <ProductCardName
          onClick={(event) => productDetailsHandler(event)}
        >{`${name}`}</ProductCardName>
        <ProductCardPrice>{`${price}zł`}</ProductCardPrice>
      </ProductCardDescription>
    </ProductCardComponent>
  );
};
