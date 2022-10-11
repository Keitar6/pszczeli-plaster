import { FC, PropsWithChildren } from "react";
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  ValidationRule
} from "react-hook-form";
import type { FieldValues } from "react-hook-form/dist/types/fields";
import type { UseFormRegister } from "react-hook-form/dist/types/form";
import { Input, NonValidFormInput } from "../checkoutForm.styles";

type CheckoutFormInput = {
  id: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  errorName: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  minLength?: ValidationRule<number> | undefined;
  pattern?: ValidationRule<RegExp> | undefined;
};

export const CheckoutFormInput: FC<PropsWithChildren<CheckoutFormInput>> = ({
  id,
  placeholder,
  register,
  errorName,
  children,
  minLength,
  pattern,
  ...restArgs
}) => {
  return (
    <>
      <label htmlFor={`${id}`}>{placeholder}</label>
      <Input
        type="text"
        id={`${id}`}
        placeholder={placeholder}
        {...register(`${id}`, {
          required: true,
          minLength: minLength,
          pattern: pattern,
          ...restArgs
        })}
      />
      {errorName && <NonValidFormInput>{children}</NonValidFormInput>}
    </>
  );
};
