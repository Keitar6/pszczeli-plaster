import { useAppDispatch } from "hooks/hooks";
import { FC, PropsWithChildren } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import type { FieldValues } from "react-hook-form/dist/types/fields";
import type { UseFormRegister } from "react-hook-form/dist/types/form";
import { setDelivery } from "store/orderHistory/orderHistory.action";
import { DeliveryType } from "store/orderHistory/orderHistory.types";
import {
  deliveryOptions,
  formData,
  paymentOptions
} from "utils/checkoutForm/checkoutForm.utils";
import { NonValidFormInput } from "../../checkoutForm.styles";
import { SelectContainer, SelectInput } from "./checkoutFormSelect.styles";
import { Select } from "./select";

type CheckoutFormInput = {
  idDelivery: string;
  idPayment: string;
  register: UseFormRegister<FieldValues>;
  errorPayment:
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
  errorDelivery:
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
};

export const CheckoutFormSelect: FC<PropsWithChildren<CheckoutFormInput>> = ({
  idDelivery,
  idPayment,
  register,
  errorPayment,
  errorDelivery
}) => {
  const dispatch = useAppDispatch();
  const deliveryPriceHandler = (deliveryType: string) => {
    dispatch(
      setDelivery(deliveryType.replace(/\s+/g, "") as DeliveryType["type"])
    );
  };

  return (
    <>
      {/* <div>
        <label htmlFor={`${idDelivery}`}>Sposób dostawy</label>
        <select
          id={`${formData.deliveryMethod}`}
          {...register(`${formData.deliveryMethod}`, { required: true })}
          onChange={(event) => deliveryPriceHandler(event.target.value)}
        >
          <option></option>
          <option value={`${deliveryOptions.poczta.value}`}>
            {`${deliveryOptions.poczta.value}`}
          </option>
          <option
            value={`${deliveryOptions.dhl.value}`}
          >{`${deliveryOptions.dhl.value}`}</option>
          <option
            value={`${deliveryOptions.inpost.value}`}
          >{`${deliveryOptions.inpost.value}`}</option>
          <option
            value={`${deliveryOptions.fedex.value}`}
          >{`${deliveryOptions.fedex.value}`}</option>
        </select>
        {errorDelivery && (
          <NonValidFormInput>Wybierz proszę sposób dostawy</NonValidFormInput>
        )}
      </div>

      <div>
        <label htmlFor={`${idPayment}`}>Metoda płatności</label>
        <select
          id={`${formData.payMethod}`}
          defaultValue={"..."}
          {...register(`${formData.payMethod}`, { required: true })}
        >
          <option></option>
          <option>{`${paymentOptions.blik.value}`}</option>
          <option>{`${paymentOptions.zaPobraniem.value}`}</option>
          <option>{`${paymentOptions.przelew.value}`}</option>
        </select>
        {errorPayment && (
          <NonValidFormInput>
            Wybierz proszę metodę płatności{" "}
          </NonValidFormInput>
        )}

      </div> */}
      <SelectContainer>

       <Select id="Hi" register={register} datas={deliveryOptions}></Select>
       <Select id="Hi" register={register} datas={paymentOptions}></Select>

      </SelectContainer>
    </>
  );
};
