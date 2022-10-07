import styled from "styled-components";
import { Colors, StandardFlexContainer } from "../../global.styles";

export const ProductCardComponent = styled(StandardFlexContainer)`
  border: 0.2rem solid ${Colors.primary};
  flex-direction: column;
  margin: 1rem 1rem;
  max-width: 15rem;
`;

export const ProductCardImageContainer = styled(StandardFlexContainer)`
  position: relative;
  flex: 1 1 70%;

  img {
    width: 100%;
    object-fit: cover;
    // border: 0.2rem solid red;
  }

  button {
    position: absolute;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.7;
    }

    button {
      display: flex;
    }
  }
`;

export const ProductCardDescription = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  flex: 1 1 auto;
  gap: 1rem;
  border-top: 0.2rem solid ${Colors.primary};
  width: 100%;
  padding: 0.5rem 0.5rem;
  cursor: pointer;
`;

export const ProductCardName = styled(StandardFlexContainer)``;

export const ProductCardPrice = styled(StandardFlexContainer)``;
