import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  Form,
  FormTextInputs
} from "../../globalStyles/form/form.globalStyles";
import { FormButtons } from "../../globalStyles/form/formButtons/formButtons.component";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setCurrentUserFormData } from "../../store/userReducer/user.actions";
import { selectCurrentUserFormData } from "../../store/userReducer/user.selector";

import { signUpAsync } from "../../store/userReducer/user.thunk";

import { signDataInputMap, signUpData } from "../../utils/loginPage/sign.utils";
import { CheckoutFormInput } from "../checkoutForm/checkoutFormInputs/textInput/checkoutFormInput.component";

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const initProfileData = useAppSelector(selectCurrentUserFormData);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const signUpHandler = (formData: FieldValues) => {
    const { name, lastName, email, password } = formData;
    const formDataWithDisplayName = {
      ...initProfileData,
      displayName: name + " " + lastName,
      name,
      lastName,
      email
    };
    dispatch(setCurrentUserFormData(formDataWithDisplayName));
    dispatch(signUpAsync(email, password));
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
        Zarejestruj si??
      </FormButtons>
    </Form>
  );
};
