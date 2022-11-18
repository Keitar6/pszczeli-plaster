import Button, {
  BUTTON_TYPE_CLASSES
} from "../../components/button/button.component";
import { SignInForm } from "../../components/signInForm/signInForm.component";
import { SignUpForm } from "../../components/signUpForm/signUpForm.component";
import { signInWithGooglePopUp } from "../../utils/firebase/firebase.utils";
import {
  SignInContainer,
  SignInTitle,
  SignUpContainer,
  SignUpTitle
} from "./login.styles";

const Login = () => {
  const loginThroughGoogleHandler = () => {
    signInWithGooglePopUp();
  };

  return (
    <>
      <SignUpContainer>
        {" "}
        <SignUpTitle> Rejestracja</SignUpTitle>
        <SignUpForm />
      </SignUpContainer>

      <SignInContainer>
        <SignInTitle> Logowanie</SignInTitle>

        <SignInForm />

        <Button
          onClick={loginThroughGoogleHandler}
          buttonType={BUTTON_TYPE_CLASSES.google}
        >
          Zaloguj przez konto Google
        </Button>
      </SignInContainer>
    </>
  );
};

export default Login;
