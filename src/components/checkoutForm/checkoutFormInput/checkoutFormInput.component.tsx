import { FC, PropsWithChildren } from "react";
import type { FieldValues } from "react-hook-form/dist/types/fields";
import type { UseFormRegister } from "react-hook-form/dist/types/form";

type CheckoutFormInput = {
  id: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
};

export const CheckoutFormInput: FC<PropsWithChildren<CheckoutFormInput>> = ({
  id,
  placeholder,
  register
}) => {
  return (
    <>
      <label htmlFor={`${id}`}>{placeholder}</label>
      <input
        type="text"
        id={`${id}`}
        placeholder={placeholder}
        {...register(`${id}`, {
          required: true,
          pattern: /^[A-Za-z]+$/i
        })}
      />
    </>
  );
};
