import { useForm } from "react-hook-form";
import {
  Form,
  FormTextInputs
} from "../../globalStyles/form/form.globalStyles";
import { FormButtons } from "../../globalStyles/form/formButtons/formButtons.component";
import { signInWithGooglePopUp } from "../../utils/firebase/firebase.utils";
import { signDataInputMap, signInData } from "../../utils/loginPage/sign.utils";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { CheckoutFormInput } from "../checkoutForm/checkoutFormInputs/textInput/checkoutFormInput.component";

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const loginThroughGoogleHandler = async () => {
    const response = signInWithGooglePopUp();
    console.log(response);
  };
  return (
    <Form className="was-validated">
      <FormTextInputs>
        {Object.keys(signInData).map((input: string) => {
          const {
            name,
            text,
            placeholder,
            minLength = 2,
            pattern,
            width = "5rem",
            inputType,
            ...restArgs
          } = signDataInputMap[input];
          return (
            <CheckoutFormInput
              id={name}
              register={register}
              pattern={pattern}
              minLength={minLength}
              placeholder={placeholder}
              errorName={errors[name]}
              width={width}
              key={name}
              inputType={inputType}
              {...restArgs}
              
            >
              {text}
            </CheckoutFormInput>
          );
        })}
      </FormTextInputs>
      <FormButtons
        submitHandler={handleSubmit((formData) => console.log(formData))}
      >
        Zaloguj się
      </FormButtons>
      <Button
          onClick={loginThroughGoogleHandler}
          buttonType={BUTTON_TYPE_CLASSES.google}
        >
          Zaloguj przez konto Google
        </Button>
      
    </Form>
  );
};
