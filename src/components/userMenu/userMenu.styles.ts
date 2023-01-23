import styled from "styled-components";
import {
  Colors,
  StandardFlexContainer,
  StandardFlexMixin
} from "../../global.styles";
import Button from "../button/button.component";

import { motion } from "framer-motion";

import { UserMenuVariants } from "../../utils/framer-motion/variants.utils";

export const UserMenu = styled.div`
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

export const UserMenuContainerMotion = styled(motion.div)`
  ${StandardFlexMixin}
  flex-direction: column;
  gap: 2.4rem;
  width: 50%;
  max-width: 40rem;
  padding: 1rem 2rem 3rem 2rem;
  text-align: center;
  border-radius: 1.5rem;
  background: ${Colors.light};
`;

export const UserMenuLogoContainer = styled(StandardFlexContainer)`
  flex-direction: row;
  gap: 1rem;
`;

export const UserMenuLogoText = styled(StandardFlexContainer)`
  flex-direction: column;
  // border: 2px solid red;
  align-items: start;
`;

export const UserMenuLinks = styled.a`
  display: inline-block;
  margin-right: 15px;
  text-decoration: none;
  background-color: #ad343e;
  padding: 5px 25px;
  color: white;
  font-size: 18px;
  border: #333 1px solid;
  border-radius: 5px;
  display: block;
  margin: 0 auto;
  cursor: pointer;
`;

export const UserMenuLoginButtons = styled.div`
  display: flex;
  flex-direction: row;
  background-color: transparent;
  width:100%;
  border:none;
  gap 2rem;
`;

export const UserMenuFuncButtons = styled(StandardFlexContainer)`
  width: 100%;
  flex-direction: column;
`;

export const UserMenuFuncButton = styled(Button)`
  width: 100%;
  border-bottom: 2px solid ${Colors.dark};
  flex-direction: row;
  gap: 0.5rem;
`;

export const GoToMyAccount = styled.div`
  cursor: pointer;
`;
