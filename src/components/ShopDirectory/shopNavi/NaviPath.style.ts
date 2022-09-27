import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../../global.styles";

export const PathWebPage = styled(Link)`
  text-decoration: none;
  color: ${Colors.dark};
`;

export const ShopInsidePath = styled(Link)`
  text-decoration: none;
  color: ${Colors.dark};
`;

export const NaviPathText = styled.div`
  display: inline-flex;
  flex-direction: row;
  padding: 0.8rem 0 0.5rem 0rem;
  margin: 0rem 0 0rem 0.8rem;
  border-bottom: 2px solid ${Colors.dark};
`;
