import styled from "styled-components";
import { StandardFlexContainer } from "../../global.styles";

export const ShopDirectoryContainer = styled(StandardFlexContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  //   flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'>
  border: 2px solid red;
`;

export const ShopDirectoryContent = styled(StandardFlexContainer)`
  border: 1px solid blue;
  flex-direction: row;
  flex: 1 1 70%;
`;

export const ShopMenu = styled(StandardFlexContainer)`
  border: 1px solid green;
  flex-direction: column;
  flex: 1 1 auto;
`;
