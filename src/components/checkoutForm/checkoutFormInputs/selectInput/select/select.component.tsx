import { FC, PropsWithChildren } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { DeliveryOptions } from "utils/checkoutForm/checkoutForm.utils";
import {
  AppCover,
  InputRadio,
  Label,
  LabelIcon,
  LabelText,
  Option,
  Options,
  OptionsViewButton,
  OptionValue,
  SelectBox,
  SelectedButton,
  SelectedValue
} from "./select.styles";
type CheckoutFormInput = {
  id: string;
  register: UseFormRegister<FieldValues>;
  datas: DeliveryOptions;
  deliveryPriceHandler?: (deliveryType: string) => void;
};

export const Select: FC<PropsWithChildren<CheckoutFormInput>> = ({
  id,
  register,
  deliveryPriceHandler,
  datas,
  children
}) => {
  return (
    <AppCover>
      <SelectBox>
        <OptionsViewButton name={`${id}`} />
        <SelectedButton>
          <SelectedValue>
            <span>{children} </span>
          </SelectedValue>
        </SelectedButton>
        <Options>
          {Object.keys(datas).map((option) => {
            return (
              <Option key={option}>
                <InputRadio
                  {...register(`${id}`, { required: true })}
                  onChange={(event) =>
                    deliveryPriceHandler &&
                    deliveryPriceHandler(event.target.value)
                  }
                  name={`${id}`}
                  value={`${datas[option].value}`}
                />

                <Label>
                  <LabelIcon icon={`${datas[option].icon}`} width="32" />
                  <LabelText>{`${datas[option].value}`}</LabelText>
                </Label>

                <OptionValue>
                  <LabelIcon icon={`${datas[option].icon}`} width="32" />
                  <LabelText>{`${datas[option].value}`}</LabelText>
                </OptionValue>
              </Option>
            );
          })}
        </Options>
      </SelectBox>
    </AppCover>
  );
};
