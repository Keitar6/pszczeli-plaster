import styled from "styled-components";
import { Colors, StandardFlexContainer } from "../../global.styles";

export const FooterContainer = styled.div`
  background-color: ${Colors.primary};
  display: flex;
  justify-content: center;
`;

export const FootersContent = styled(StandardFlexContainer)`
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: start;
  flex-wrap: wrap;
  padding: 0 1rem 0 1rem;
`;
