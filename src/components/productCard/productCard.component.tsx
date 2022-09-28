import { FC, PropsWithChildren } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  ProductCardPrice,
  ProductCardComponent,
  ProductCardDescription,
  ProductCardName,
  ProductCardImageContainer
} from "./productCard.styles";

type ProductCardProps = {
  id: string;
  name: string;
  dodatki?: boolean;
  image: string;
  price: number;
};
export const ProductCard: FC<PropsWithChildren<ProductCardProps>> = ({
  id,
  name,
  dodatki,
  image,
  price
}) => {
  
  return (
    <ProductCardComponent>
      <ProductCardImageContainer>
        <img src={require(`./lipa.jpg`)} alt={`Obraz: ${name}`} />
        <Button
          buttonType={BUTTON_TYPE_CLASSES.productCard}
          // onClick={addProductHandler}
        >
          Add to cart
        </Button>
      </ProductCardImageContainer>

      <ProductCardDescription>
        <ProductCardName>{name}</ProductCardName>
        <ProductCardPrice>{`$${price}`}</ProductCardPrice>
      </ProductCardDescription>
    </ProductCardComponent>
  );
};
