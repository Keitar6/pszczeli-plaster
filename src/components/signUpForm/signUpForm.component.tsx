import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  Form,
  FormTextInputs
} from "../../globalStyles/form/form.globalStyles";
import { FormButtons } from "../../globalStyles/form/formButtons/formButtons.component";
import { useAppDispatch } from "../../hooks/hooks";

import { signUpAsync } from "../../store/userReducer/user.thunk";

import { signDataInputMap, signUpData } from "../../utils/loginPage/sign.utils";
import { CheckoutFormInput } from "../checkoutForm/checkoutFormInputs/textInput/checkoutFormInput.component";

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  const signUpHandler = (formData: FieldValues) => {
    const { name, lastname, email, password } = formData;

    dispatch(signUpAsync(email, password, { displayName: name }));
    navigate("/", { replace: true });
  };

  return (
    <Form className="was-validated" id="signUpForm">
      <FormTextInputs>
        {Object.keys(signUpData).map((input: string) => {
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
              idPlus={`${name + "reg"}`}
              key={`${name + "reg"}`}
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
          signUpHandler(formData);
        })}
        idPlus="regButton"
      >
        Zarejestruj się
      </FormButtons>
    </Form>
  );
};
