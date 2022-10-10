import { Icon } from "@iconify/react";
import { Colors, H2, H3, PLarge } from "../../global.styles";
import Modal from "../modal/modal.component";
import {
  ProductCardDetails,
  ProductCardDetailsLogoContainer,
  ProductCardDetailsLogoText,
  ProductCardDetailsContainer,
  ProductDetails,
  ProductDescription,
  ProductDescriptionTitle,
  ProductDetailsImageWithDescription,
  ProductImage,
  ProductPayETC,
  AddToFavourite,
  ProductCardModalButtons,
  ProductConsumerDetails,
  ProductModalIcon,
  ProductModalIconButton
} from "./productDetailsModal.styles";
import { toggleProductCard } from "store/generalPropReducer/generalProp.actions";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import React, { FC } from "react";
import { selectCurrentProductCard } from "store/generalPropReducer/generalProp.selector";
import Button, {
  BUTTON_TYPE_CLASSES
} from "components/button/button.component";
import { selectCartItems } from "store/cartReducer/cart.selector";
import { addItemToCart } from "store/cartReducer/cart.actions";
import { useNavigate } from "react-router-dom";

type UserMenuClosingHandlerType<T extends HTMLElement> = React.MouseEvent<
  T,
  MouseEvent
> & {
  target: T;
};

export const ProductDetailsModal: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const productCard = useAppSelector(selectCurrentProductCard);
  const cartItems = useAppSelector(selectCartItems);
  const { id, dodatki, name, image, price, weight } = productCard;
  const productDetailsClosingHandler = (
    event: UserMenuClosingHandlerType<HTMLDivElement>
  ): void => {
    if (event.target.id === "UserMenuContainer") {
      dispatch(toggleProductCard());
    }
  };
  const addProductHandler = () => {
    const productToAdd = { id, dodatki, image, name, price };
    dispatch(addItemToCart(cartItems, productToAdd));
  };
  const navigateToCartHandler = () => {
    navigate("/podsumowanie");
    dispatch(toggleProductCard());
  };

  return (
    <Modal>
      <ProductCardDetails
        id="UserMenuContainer"
        onClick={(e) => {
          productDetailsClosingHandler(
            e as UserMenuClosingHandlerType<HTMLDivElement>
          );
        }}
      >
        <ProductCardDetailsContainer>
          <ProductCardDetailsLogoContainer>
            <Icon
              icon="fluent-emoji-high-contrast:polar-bear"
              color={Colors.primary}
              width="64"
              height="64"
            />
            <ProductCardDetailsLogoText>
              <H2>{`${name}`}</H2>
            </ProductCardDetailsLogoText>
          </ProductCardDetailsLogoContainer>
          <ProductDetails>
            <ProductDetailsImageWithDescription>
              <ProductImage src={`/dataBaseImages/${image}`} />
              <ProductPayETC>
                <AddToFavourite>
                  {" "}
                  <Icon
                    icon="ant-design:heart-outlined"
                    color={Colors.primary}
                    width="32"
                  />{" "}
                  Dodaj do ulubionych
                </AddToFavourite>
                <ProductConsumerDetails>
                  <H3> {`Szczegóły:`}</H3>
                  <PLarge> {`Waga: ${weight}g`}</PLarge>
                  <PLarge> {`Cena: ${price}zł`}</PLarge>
                </ProductConsumerDetails>
                <ProductCardModalButtons>
                  <Button
                    buttonType={BUTTON_TYPE_CLASSES.productCardCartButton}
                    onClick={() => addProductHandler()}
                  >
                    Dodaj do koszyka{" "}
                  </Button>
                  <ProductModalIconButton onClick={navigateToCartHandler}>
                    <ProductModalIcon
                      icon="akar-icons:arrow-right"
                      width="32"
                    />
                  </ProductModalIconButton>
                </ProductCardModalButtons>
              </ProductPayETC>
            </ProductDetailsImageWithDescription>
            <ProductDescriptionTitle>{`${String(
              "Opis"
            ).toUpperCase()}`}</ProductDescriptionTitle>
            <ProductDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              similique laborum excepturi ducimus praesentium, sapiente cumque
              ipsum perspiciatis quod eos illum aliquam illo a, rem, recusandae
              veritatis quibusdam in tempora?
            </ProductDescription>
          </ProductDetails>
        </ProductCardDetailsContainer>
      </ProductCardDetails>
    </Modal>
  );
};
