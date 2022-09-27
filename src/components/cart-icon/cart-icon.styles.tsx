import styled from "styled-components";
import { ReactComponent as CartIcon } from "../../assets/shopping-bag.svg";
import { PLarge } from "../../global.styles";

export const CartIconContainer = styled.div`
  width: 38px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIcon = styled(CartIcon)`
  width: 48px;
  height: 48px;
`;

export const ItemCount = styled(PLarge)`
  position: absolute;
  bottom: 7px;
`;
