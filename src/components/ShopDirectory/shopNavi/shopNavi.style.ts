import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../../global.styles";

export const PathWebPage = styled(Link)`
  text-decoration: none;
  color: ${Colors.dark};
  border-right: 1px solid ${Colors.darkRGBA};
  padding: 0 0.3rem 0 0.3rem;
`;

export const ShopInsidePath = styled(Link)`
  text-decoration: none;
  color: ${Colors.dark};
  padding: 0 0.3rem 0 0.3rem;
`;

export const NaviPathText = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;

  padding: 0.8rem 0 0.5rem 0rem;
  margin: 0rem 0.8rem;
  border-bottom: 1px solid ${Colors.darkRGBA};
  // border: 2px solid red;
  flex-basis: 10%;
`;
