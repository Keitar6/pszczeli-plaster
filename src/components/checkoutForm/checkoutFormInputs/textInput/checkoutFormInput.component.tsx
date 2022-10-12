import { FC, PropsWithChildren } from "react";
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  ValidationRule
} from "react-hook-form";
import type { FieldValues } from "react-hook-form/dist/types/fields";
import type { UseFormRegister } from "react-hook-form/dist/types/form";
import {
  NonValidFormInput,
} from "../../checkoutForm.styles";
import { InputContainer, InputLabel, TextInput } from "./checkoutFormInput.styles";

type CheckoutFormInput = {
  id: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  errorName: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  minLength?: ValidationRule<number> | undefined;
  pattern?: ValidationRule<RegExp> | undefined;
  width?: string;
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
  ...restArgs
}) => {
  return (
    <InputContainer width={`${width && width}`}>
      <TextInput
        autoComplete="off"
        type="text"
        id={`${id}`}
        placeholder={`${placeholder}`}
        {...register(`${id}`, {
          required: true,
          minLength: minLength,
          pattern: pattern,
          ...restArgs
        })}
      />
      <InputLabel htmlFor={`${id}`}>{placeholder}</InputLabel>
      {errorName && <NonValidFormInput>{children}</NonValidFormInput>}
    </InputContainer>
  );
};
