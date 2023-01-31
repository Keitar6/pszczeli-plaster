import { FC, PropsWithChildren } from "react";
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  ValidationRule
} from "react-hook-form";
import type { FieldValues } from "react-hook-form/dist/types/fields";
import type { UseFormRegister } from "react-hook-form/dist/types/form";
import { NonValidFormInput } from "../../../../globalStyles/form/form.globalStyles";
import { PLFormData } from "../../../../utils/checkoutForm/checkoutForm.utils";
import {
  InputContainer,
  InputLabel,
  TextInput
} from "./checkoutFormInput.styles";

type CheckoutFormInput = {
  id: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  errorName: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  inputType?: string;
  minLength?: ValidationRule<number> | undefined;
  pattern?: ValidationRule<RegExp> | undefined;
  width?: string;
  disabledText?: boolean;
  idPlus?: string;
  initValue?: string;
};

export const CheckoutFormInput: FC<PropsWithChildren<CheckoutFormInput>> = ({
  id,
  placeholder,
  register,
  errorName,
  children,
  minLength,
  pattern,
  width,
  inputType,
  idPlus,
  disabledText,
  initValue,
  ...restArgs
}) => {
  return (
    <InputContainer width={`${width && width}`}>
      <TextInput
        autoComplete="off"
        type={inputType}
        id={`${id}` + idPlus}
        placeholder={`${placeholder}`}
        disabled={disabledText}
        value={initValue !== "---" ? initValue : " "}
        {...register(`${id}`, {
          required: true,
          minLength: minLength,
          pattern: pattern,
          ...restArgs
        })}
      />
      <InputLabel htmlFor={`${id}`}>{PLFormData[id]}</InputLabel>
      {errorName && <NonValidFormInput>{children}</NonValidFormInput>}
    </InputContainer>
  );
};
