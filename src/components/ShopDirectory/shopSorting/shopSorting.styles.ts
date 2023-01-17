import { StandardFlexContainer, Typhography } from "../../../global.styles";
import styled from "styled-components";

export const ProductsSorting = styled.div`
  display: flex;
  width: 100%;

  justify-content: end;
  align-items: center;
  padding: 0.5rem 5rem 0.5rem 0;
  gap: 1rem;
`;

export const ShopAscendingIcon = styled(StandardFlexContainer)`
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
