import { StandardFlexContainer, Typhography } from "../../../global.styles";
import styled from "styled-components";

export const ProductsSorting = styled.div`
  // border: 1px solid blue;
  display: flex;
  width: 100%;
  justify-content: end;
  padding: 0.5rem 5rem 0.5rem 0;
  gap: 1rem;
  // border: 1px solid blue;
`;

export const ShopAscendingIcon = styled.div`
  // border: 1px solid blue;
  cursor: pointer;
`;

export const SortingTypesList = styled(StandardFlexContainer)`
  flex-direction: row-reverse;
  gap: 0.5rem;

  font-family: ${Typhography.fontType};
  font-size: ${Typhography.fontSizes.H6};
  font-weight: bold;
  background-color: transparent;
  border-radius: 5rem;
`;
