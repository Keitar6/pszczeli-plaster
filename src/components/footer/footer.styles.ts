import styled from "styled-components";
import { Colors } from "../../global.styles";

export const FooterContainer = styled.div`
  background-color: ${Colors.primary};
  display: flex;
  justify-content: center;
`;

export const FootersContent = styled.div`
  display: inline-flex;
  flex-direction: row;
  gap: 10rem;
  flex-wrap: wrap;
  padding: 0 1rem 0 1rem;
`;
