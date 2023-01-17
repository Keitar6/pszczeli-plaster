import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors, StandardFlexContainer } from "../../global.styles";
import Button from "../button/button.component";

export const ShopDirectoryContainer = styled(StandardFlexContainer)`
  display: flex;
  align-items: start;
  flex-direction: row;
  justify-content: space-between;
  margin: 0rem 0rem;
  flex-basis: 90%;
`;

export const ShopDirectoryContent = styled(StandardFlexContainer)`
  flex-direction: column;
  flex: 1 1 70%;
  gap: 0rem;
  height: 100%;
  flex-wrap: nowrap;
`;

export const ShopDirectoryContentHeader = styled.div`
  border-bottom: 1px solid ${Colors.darkRGBA};
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 0 0.6rem 0rem;
  max-height: 3.3rem;
  flex: 1 1 10%;
  H1 {
    width: 100%;
    color: ${Colors.primary};
    text-align: center;
    margin: auto;

    text-transform: uppercase;
  }
`;

export const ShopMenuContainer = styled.div`
  border-right: 1px solid ${Colors.darkRGBA};
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  justify-content: start;
  align-items: center;
  gap: 5rem;
  padding: 0 0 0.6rem 0rem;
`;

export const ShopMenuItems = styled.ul``;

export const ShopMenuItem = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-decoration: none;
  border: none;
  color: ${Colors.dark};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
export const ShopDirectoryButton = styled(Button)`
  flex: 0 0 5%;
  width: 100%;
  border-radius: 0.5rem;
`;
