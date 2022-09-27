import styled from "styled-components";
import { Colors, StandardFlexContainer } from "../../global.styles";

export const InputIcon = styled(StandardFlexContainer)`
  display: flex;
  text-align: center;
  height: 100%;
  background-color: none;
  padding: 0;
`;
// ${Colors.light}
export const InputBarContainer = styled(StandardFlexContainer)`
  flex-direction: row;
  //   border: 1px solid red;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.75));
`;

export const Inputcontainer = styled(StandardFlexContainer)`
  flex-direction: row;

  gap: 0.6rem;
  background-color: ${Colors.light};
  // border: 1px solid blue;
  border-radius: 0.5rem 0 0 0.5rem;
  padding: 0 0 0 0.4rem;
  height: 2rem;
`;

export const Input = styled.input`
  display: flex;
  text-align: start;
  justify-content: center;
  flex-direction: row;
  background-color: ${Colors.light};
  width: 7rem;
  height: 100%;
  border: none;

  &:focus {
    outline: none;
  }
`;
