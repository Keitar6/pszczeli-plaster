import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  Form,
  FormTextInputs
} from "../../globalStyles/form/form.globalStyles";
import { FormButtons } from "../../globalStyles/form/formButtons/formButtons.component";
import { useAppDispatch } from "../../hooks/hooks";
import { signInWithEmailAsync } from "../../store/userReducer/user.thunk";
import { signDataInputMap, signInData } from "../../utils/loginPage/sign.utils";
import { CheckoutFormInput } from "../checkoutForm/checkoutFormInputs/textInput/checkoutFormInput.component";

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <Form className="was-validated" id="signInForm">
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
              id={`${name}`}
              register={register}
              pattern={pattern}
              minLength={minLength}
              placeholder={placeholder}
              errorName={errors[name]}
              width={width}
              key={`${name + "log"}`}
              inputType={inputType}
              {...restArgs}
            >
              {text}
            </CheckoutFormInput>
          );
        })}
      </FormTextInputs>
      <FormButtons
        submitHandler={handleSubmit((formData) => {
          dispatch(
            signInWithEmailAsync(formData.email, formData.password)
          )
        })}
        idPlus="logButton"
      >
        Zaloguj się
      </FormButtons>
    </Form>
  );
};
