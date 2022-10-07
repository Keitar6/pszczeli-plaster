import styled from "styled-components";
import { Colors, StandardFlexContainer } from "../../global.styles";

export const UserMenu = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 52;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  &:empty {
    display: none;
  }
`;

export const UserMenuContainer = styled(StandardFlexContainer)`
  flex-direction: column;
  gap: 2.4rem;
  max-width: 50rem;
  padding: 1rem 2rem 3rem 2rem;
  text-align: center;
  border-radius: 1.5rem;
  background: ${Colors.light};
`;

export const UserMenuLogoContainer = styled(StandardFlexContainer)`
  flex-direction: row;
  gap: 1rem;
`;

export const UserMenuLogoText = styled(StandardFlexContainer)`
  flex-direction: column;
  // border: 2px solid red;
  align-items: start;
`;
