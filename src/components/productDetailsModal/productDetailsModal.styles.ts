import { Icon } from "@iconify/react";
import styled from "styled-components";
import { Colors, H4, StandardFlexContainer } from "../../global.styles";

export const ProductCardDetails = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 52;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  &:empty {
    display: none;
  }
`;
export const ProductCardDetailsContainer = styled(StandardFlexContainer)`
  gap: 2.4rem;
  max-width: 40rem;
  max-height: 100vh;
  // min-height: 100vh;
  flex-direction: row;
  padding: 1rem 2rem 3rem 2rem;
  text-align: center;
  border-radius: 1.5rem;
  background: ${Colors.light};

  @media (max-width: 500px) {
    & {
      max-width: 100%;
      border-radius: 0rem;
    }
  }
`;
export const ProductCardDetailsLogoContainer = styled(StandardFlexContainer)`
  flex-direction: row;
  gap: 2rem;
`;
export const ProductCardDetailsLogoText = styled(StandardFlexContainer)`
  flex-direction: column;
  // border: 2px solid red;
  align-items: start;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    border-left: 0.2rem solid ${Colors.primary};
    border-top: 0.2rem solid ${Colors.dark};
    border-radius: 0.6rem 0 00rem;
    top: -0.5rem;
    left: -1rem;
  }

  &::after {
    content: "";
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    border-right: 0.2rem solid ${Colors.primary};
    border-bottom: 0.2rem solid ${Colors.dark};
    border-radius: 0rem 0 0.6rem 0rem;
    bottom: -0.5rem;
    right: -1rem;
  }
`;
export const ProductDetails = styled.div`
  // border: 2px solid red;
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
export const ProductDescription = styled.p`
  // border: 2px solid blue;
  display: inline-flex;
  flex-wrap: wrap;
  text-align: start;
  justify-content: flex-start;
`;
export const ProductDescriptionTitle = styled(H4)`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    to left,
    ${Colors.primary},
    ${Colors.dark}
  );
  padding-bottom: 0.2rem;
  margin-bottom: 0.5rem;

  position: relative;
`;
export const ProductDetailsImageWithDescription = styled(StandardFlexContainer)`
  width: 100%;
  // border: 2px solid red;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  margin: 0 0 1rem 0;
  gap: 3rem;
`;
export const ProductImage = styled.img`
  height: 50%;
  width: 50%;
  object-fit: cover;
  border-radius: 1rem;
  // border: 0.2rem solid red;
`;
export const ProductPayETC = styled(StandardFlexContainer)`
  // border: 2px solid red;
  flex-direction: column;
  align-items: start;
`;
export const ProductConsumerDetails = styled(StandardFlexContainer)`
  // border: 2px solid red;
  flex-direction: column;
  align-items: start;
  margin: 1rem;
`;
export const AddToFavourite = styled(StandardFlexContainer)``;
export const ProductCardModalButtons = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  // border: 2px solid red;
  margin: 0;
  padding: 0;
`;
export const ProductModalIcon = styled(Icon)`
  // border: 2px solid red;
  z-inder: 100;
  color: ${Colors.primary};
  margin: 0;

  &:hover {
    color: ${Colors.light};
  }
`;
export const ProductModalIconButton = styled.button`
  border: none;
  width: 30%;
  height: 3.6rem;
  border-radius: 0 0.4rem 0.4rem 0;
  background-color: ${Colors.dark};
  cursor: pointer;

  // &:hover {
  //   background-color: ${Colors.primary};
  // }
`;
