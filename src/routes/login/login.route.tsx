import { SignInForm } from "../../components/signInForm/signInForm.component";
import {
  LoginPageContainer,
  SignInContainer,
  SignInTitle,
  SignUpContainer,
  SignUpTitle
} from "./login.styles";

const LoginPage = () => {

  return (
    <LoginPageContainer>
      <SignUpContainer>
        {" "}
        <SignUpTitle> Rejestracja</SignUpTitle>{" "}
      </SignUpContainer>

      <SignInContainer>
        <SignInTitle> Logowanie</SignInTitle>

        <SignInForm></SignInForm>
        
      </SignInContainer>
    </LoginPageContainer>
  );
};

export default LoginPage;
