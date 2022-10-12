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
import { SelectContainer, SelectContent } from "./checkoutFormSelect.styles";
import { Select } from "./select/select.component";

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
    console.log(deliveryType);
    dispatch(
      setDelivery(deliveryType.replace(/\s+/g, "") as DeliveryType["type"])
    );
  };

  return (
    <>
      <SelectContainer>
        <SelectContent>
          <Select
            id={`${idDelivery}`}
            register={register}
            datas={deliveryOptions}
            deliveryPriceHandler={deliveryPriceHandler}
          >
            Sposób dostawy
          </Select>
          {errorDelivery && (
            <NonValidFormInput>Wybierz proszę sposób dostawy</NonValidFormInput>
          )}
        </SelectContent>

        <SelectContent>
          <Select
            id={`${idPayment}`}
            register={register}
            datas={paymentOptions}
          >
            Metoda płatność
          </Select>
          {errorPayment && (
            <NonValidFormInput>
              Wybierz proszę metodę płatności{" "}
            </NonValidFormInput>
          )}
        </SelectContent>
      </SelectContainer>
    </>
  );
};
