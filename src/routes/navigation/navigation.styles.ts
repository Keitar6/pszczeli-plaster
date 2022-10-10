import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Colors } from "../../global.styles";

export enum naviIcons {
  search = "fa-solid:search",
  language = "fa:language",
  honeyBee = "noto:honeybee",
  myAcc = "fluent:inprivate-account-20-filled"
}

export const NavigationContainer = styled.nav`
  display: flex;
  // flex: 1 1 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem 1rem 0;

  background-color: ${Colors.primary};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.75));
  position: sticky;
  top: 0;
  z-index: 50;
`;

export const StructurizeComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
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
  border: 1px solid ${Colors.dark};
  border-radius: 50%;
  background-color: ${Colors.light};
  padding: 0.1rem 0.4rem;
  z-index: 20;
`;

export const HamburgerIcon = styled(Hamburger)``;
