import { StandardFlexContainer } from "../../global.styles";
import styled from "styled-components";

export const ProductCards = styled(StandardFlexContainer)`
  flex-direction: row;
  justify-content: flex-start;
  gap: 0.5rem;
`;

export const ProductCardsContent = styled(StandardFlexContainer)`
  width: 100%;
  justify-content: start;
  align-items: start;
  gap: 0.5rem;
  // border: 1px solid blue;
  flex: 1 1 60%;
`;
