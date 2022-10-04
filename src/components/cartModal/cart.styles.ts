import styled, { keyframes } from "styled-components";
import { Colors, StandardFlexContainer } from "../../global.styles";

const slideIn = keyframes`
{
  100% { transform: translateY(0%); }
}
`;

const slideOut = keyframes`
{
  0% { transform: translateY(0%); }
  100% { transform: translateY(-100%); }
}
`;

export const Cart = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  gap: 1rem;

  &:empty {
    display: none;
  }
`;

export const CartContainer = styled(StandardFlexContainer)`
  flex-direction: column;
  gap: 2.4rem;
  max-width: 50rem;
  padding: 1rem 2rem 3rem 2rem;
  justify-content: start;

  background: ${Colors.light};
  height: 100%;

  animation: ${slideIn} 0.5s forwards;
  `;

export const CartLogoContainer = styled(StandardFlexContainer)`
  flex-direction: row;
  gap: 1rem;
`;

export const CartLogoText = styled(StandardFlexContainer)`
  flex-direction: column;
  // border: 2px solid red;
  align-items: start;
`;

export const CartGoToCheckout = styled(StandardFlexContainer)`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  // align-items: end;
  // border: 2px solid red;
`;
