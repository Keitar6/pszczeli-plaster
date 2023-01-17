import { Colors, Typhography } from "../../../global.styles";
import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 5rem;
  //   margin-bottom: 1rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid ${Colors.darkRGBA};
`;
export const Image = styled.img`
  width: 7rem;
  padding-right: 0.5rem;
  border-right: 1px solid ${Colors.darkRGBA};
`;

export const ItemDetails = styled.div`
  width: 80%;
  flex-basis: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0rem 1rem;
  gap: 1rem;
`;

export const Name = styled.span`
  width: 100%;
  font-size: ${Typhography.fontSizes.H6};
  //   border: 2px solid red;
`;

export const Price = styled.span`
  display: flex;
  width: 100%;
  font-size: ${Typhography.fontSizes.H6};
  font-weight: bold;
  //   border: 2px solid red;
`;
