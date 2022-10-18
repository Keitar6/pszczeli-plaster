import styled from "styled-components";
import { Colors, StandardFlexContainer } from "../../global.styles";

export const InputIcon = styled(StandardFlexContainer)`
  display: flex;
  text-align: center;
  height: 100%;
  background-color: none;
  padding: 0;
  @media (max-width: 1000px) {
    & {
      // border: 2px solid red;
      max-width: 1rem;
    }
  }
`;

export const InputBarContainer = styled(StandardFlexContainer)`
  flex-direction: row;
  flex-wrap: nowrap;
  // border: 2px solid red;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.75));
`;

export const Inputcontainer = styled(StandardFlexContainer)`
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 0.6rem;
  background-color: ${Colors.light};
  // border: 2px solid red;
  border-radius: 0.5rem 0 0 0.5rem;
  padding: 0 0 0 0.3rem;
`;

export const Input = styled.input`
  display: flex;
  text-align: start;
  justify-content: center;
  flex-direction: row;
  background-color: ${Colors.light};
  width: 7rem;
  border: none;
  height: 2rem;

  &:focus {
    outline: none;
  }

  @media (max-width: 1000px) {
    & {
      // border: 2px solid red;
      max-width: 2.7rem;
    }
  }
`;
