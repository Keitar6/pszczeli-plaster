import styled from "styled-components";
import { Colors, StandardFlexContainer } from "../../global.styles";
import { motion } from "framer-motion";

import { CartVariants } from "../../utils/framer-motion/variants.utils";

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
  flex-wrap: nowrap;
  gap: 2.4rem;
  max-width: 70%;
  padding: 1rem 2rem 3rem 2rem;
  justify-content: start;

  background: ${Colors.light};
  height: 100%;

  overflow: scroll;
  border: 1px solid red;
`;

export const CartLogoContainer = styled(StandardFlexContainer)`
  flex-direction: row;
  gap: 1rem;
`;

export const CartLogoText = styled(StandardFlexContainer)`
  flex-direction: column;
  align-items: start;
`;

export const CartGoToCheckout = styled(StandardFlexContainer)`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
export const CartWrapperMotion = styled(motion.div)`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  flex-wrap: nowrap;
  gap: 2.4rem;
  max-width: 70%;
  padding: 1rem 2rem 3rem 2rem;
  justify-content: start;

  background: ${Colors.light};
  height: 100%;

  overflow: scroll;
`;

export const CartItemsMotionWrapper = styled(motion.div)``;
