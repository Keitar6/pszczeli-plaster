import styled from "styled-components";
import { Colors, StandardFlexContainer } from "../../global.styles";

export const ProductCardComponent = styled(StandardFlexContainer)`
  border: 0.2rem solid ${Colors.primary};
  flex-direction: column;
  margin: 1rem;
  flex-wrap: nowrap;
  max-height: 15rem;
`;

export const ProductCardImageContainer = styled(StandardFlexContainer)`
  position: relative;
  flex: 1 1 70%;

  img {
    height: 12rem;
    width: 12rem;
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

export const ProductCardName = styled(StandardFlexContainer)`
  position: relative;

  background-image: linear-gradient(
    to right,
    ${Colors.primary},
    ${Colors.dark} 50%,
    #000 50%
  );
  background-size: 200% 100%;
  background-position: -100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease-in-out;

  &:before {
    content: "";
    background: linear-gradient(to left, ${Colors.primary}, ${Colors.dark});
    display: block;
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 3px;
  }

  &:hover {
    background-position: 0;
  }

  &:hover::before {
    transition: all 0.3s ease-in-out;
    width: 100%;
  }
`;

export const ProductCardPrice = styled(StandardFlexContainer)``;
