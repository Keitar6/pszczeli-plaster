import styled from "styled-components";
import { StandardFlexContainer, Title } from "../../global.styles";

export const LoginPageContainer = styled(StandardFlexContainer)`
  // border: 2px solid red;
  justify-content: space-around;
  flex-direction: row;
  align-items: start;
`;

export const SignInContainer = styled(StandardFlexContainer)`
  // border: 2px solid red;
  align-items: start;
  flex-direction: column;
  max-width: 28rem;
`;

export const SignUpContainer = styled(StandardFlexContainer)`
  // border: 2px solid red;
  align-items: start;
  flex-direction: column;
  margin: 0 0 1rem 0;
  max-width: 28rem;
`;

export const SignInTitle = styled(Title)`
  margin-bottom: 1rem;
`;

export const SignUpTitle = styled(Title)`
  margin-bottom: 1rem;
`;
