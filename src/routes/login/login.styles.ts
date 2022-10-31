import styled from "styled-components";
import { StandardFlexContainer, Title } from "../../global.styles";

export const LoginPageContainer = styled(StandardFlexContainer)`
  border: 2px solid red;
  justify-content: space-around;
  align-items: start;
`;

export const SignInContainer = styled(StandardFlexContainer)`
  //   border: 2px solid red;
  align-items: start;
  flex-direction: column;
`;

export const SignUpContainer = styled(StandardFlexContainer)`
  //   border: 2px solid red;
  align-items: start;
  flex-direction: column;
`;

export const SignInTitle = styled(Title)`
  margin-bottom: 1rem;
`;

export const SignUpTitle = styled(Title)`
  margin-bottom: 1rem;
`;
