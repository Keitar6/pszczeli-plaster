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
import { toggleProductCard } from "../../store/generalPropReducer/generalProp.actions";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { FC } from "react";
import { selectCurrentProductCard } from "../../store/generalPropReducer/generalProp.selector";
import Button, {
  BUTTON_TYPE_CLASSES
} from "../../components/button/button.component";
import {
  selectCartCount,
  selectCartItems
} from "../../store/cartReducer/cart.selector";
import { addItemToCart } from "../../store/cartReducer/cart.actions";
import { useNavigate } from "react-router-dom";
import { isCartEmpty } from "../../utils/reusableFunctions/isCartEmpty.function";

export const ProductDetailsModal = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const productCard = useAppSelector(selectCurrentProductCard);
  const cartItems = useAppSelector(selectCartItems);
  const cartQuantity = useAppSelector(selectCartCount);

  const { id, dodatki, name, image, price, weight } = productCard;

  const productDetailsClosingHandler = (): void => {
    dispatch(toggleProductCard());
  };

  const addProductHandler = () => {
    const productToAdd = { id, dodatki, image, name, price };
    dispatch(addItemToCart(cartItems, productToAdd));
  };

  const navigateToCartHandler = () => {
    navigate("/podsumowanie");
  };

  return (
    <Modal>
      <ProductCardDetails
        id="UserMenuContainer"
        onClick={() => {
          productDetailsClosingHandler();
        }}
        data-testid="productDetailsClosing"
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
                  {weight && <PLarge> {`Waga: ${weight}g`}</PLarge>}
                  <PLarge> {`Cena: ${price}zł`}</PLarge>
                </ProductConsumerDetails>
                <ProductCardModalButtons>
                  <Button
                    data-testid="addProduct"
                    buttonType={BUTTON_TYPE_CLASSES.productCardCartButton}
                    onClick={() => addProductHandler()}
                  >
                    Dodaj do koszyka{" "}
                  </Button>
                  <ProductModalIconButton
                    onClick={() =>
                      isCartEmpty(cartQuantity) && navigateToCartHandler()
                    }
                    data-testid="navigateToCart"
                  >
                    <ProductModalIcon
                      icon={`${
                        isCartEmpty(cartQuantity)
                          ? "akar-icons:arrow-right"
                          : "carbon:shopping-cart-clear"
                      }`}
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
