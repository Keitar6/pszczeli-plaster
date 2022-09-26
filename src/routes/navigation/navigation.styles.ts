import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Colors } from "../../global.styles";

export const NavigationContainer = styled.nav`
  display: flex;
  flex: 1 1 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem 1rem 0;
  position: relative;
  background-color: ${Colors.primary};
`;

export const IconsContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const BrandName = styled.h1`
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
`;

export const Logo = styled(Link)`
  margin-left: 1rem;
  cursor: pointer;
  // border: 2px solid red;
  z-index: 20;
`;

export const HamburgerIcon = styled(Hamburger)``;
