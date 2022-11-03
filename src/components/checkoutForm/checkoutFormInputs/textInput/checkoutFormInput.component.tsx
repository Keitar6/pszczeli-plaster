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
  idPlus?: string;
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
  ...restArgs
}) => {
  return (
    <InputContainer width={`${width && width}`}>
      <TextInput
        autoComplete="off"
        type={inputType}
        id={`${id}`+idPlus}
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
