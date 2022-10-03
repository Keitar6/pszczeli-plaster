import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors, StandardFlexContainer } from "../../global.styles";

export const ShopDirectoryContainer = styled(StandardFlexContainer)`
  display: flex;
  align-items: start;
  flex-direction: row;
  justify-content: space-between;
  margin: 0rem 0 0 0;
  // border: 2px solid red;
`;

export const ShopDirectoryContent = styled(StandardFlexContainer)`
  // border: 1px solid blue;
  flex-direction: column;
  flex: 1 1 70%;
  gap: 2rem;
`;

export const ShopDirectoryContentHeader = styled.div`
  border-bottom: 1px solid ${Colors.darkRGBA};
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 0 0.6rem 0rem;
  H1 {
    width: 100%;
    color: ${Colors.primary};
    text-align: center;
    text-transform: uppercase;
    // border: 1px solid blue;
  }
`;

export const ProductCardsContainer = styled(StandardFlexContainer)`
  // border: 1px solid blue;
  width: 100%;
  flex-direction: row;
  gap: 0.5rem;
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
