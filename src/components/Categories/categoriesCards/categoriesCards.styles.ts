import styled from "styled-components";

import { PLarge } from "../../../global.styles";
import { Colors } from "../../../global.styles";

export const CategoryCardContainer = styled.div`
  border: 0.2rem solid ${Colors.primary};
  display: inline-flex;
  flex-direction: column;
  gap: 0;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const CategoryCardIcon = styled.span`
  /* border: 2px solid red; */
  padding: 0.5rem 1rem 0.5rem 1rem;
`;

export const CategoryCardTitle = styled(PLarge)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5rem 1rem 0.5rem 1rem;
  margin: auto;

  // border: 2px solid red;
  background-color: ${Colors.primary};
`;
