import { FC, PropsWithChildren } from "react";
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  UseFormRegister
} from "react-hook-form";
import { DeliveryOptions } from "utils/checkoutForm/checkoutForm.utils";
import "./select.css";
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
    <div id="app-cover">
      <div id={`select-box ${id}`}>
        <input
          type="checkbox"
          id={`options-view-button`}
          {...register(`${id}`, { required: true })}
          onChange={(event) =>
            deliveryPriceHandler && deliveryPriceHandler(event.target.value)
          }
        />
        <div id="select-button" className="brd">
          <div id="selected-value">
            <span>{children} </span>
          </div>
        </div>
        <div id="options">
          {Object.keys(datas).map((option) => {
            return (
              <div key={option} className="option">
                <input
                  className="s-c top"
                  type="radio"
                  name="platform"
                  value="codepen"
                />
                <input
                  className="s-c bottom"
                  type="radio"
                  name="platform"
                  value="codepen"
                />
                <i className="fab fa-codepen"></i>
                <span className="label">{`${datas[option].value}`}</span>
                <span className="opt-val">{`${datas[option].value}`}</span>
              </div>
            );
          })}
          <div id="option-bg"></div>
        </div>
      </div>
    </div>
  );
};
