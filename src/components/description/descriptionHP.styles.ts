import { Colors, H3, StandardFlexContainer } from "global.styles";
import styled from "styled-components";

export const DescriptionTitle = styled(H3)`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  border-bottom: 2px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    to left,
    ${Colors.dark},
    ${Colors.primary},
    ${Colors.dark}
  );
  padding-bottom: 0.2rem;
  margin-bottom: 0.5rem;
  position: relative;
`;
export const Description = styled.div`
  // border: 2px solid blue;
  display: inline-flex;
  flex-wrap: wrap;
  text-align: start;
  justify-content: flex-start;
`;

export const DescriptionHPContainer = styled(StandardFlexContainer)`
  flex-direction: column;
  padding: 1rem 1rem;
`;
