import { Icon } from "@iconify/react";
import { FC, PropsWithChildren } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { DeliveryOptions } from "utils/checkoutForm/checkoutForm.utils";
import "./select.styles.css";
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
      <div id="select-box">
        <input type="checkbox" id="options-view-button" name={`${id}`} />
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
                  {...register(`${id}`, { required: true })}
                  onChange={(event) =>
                    deliveryPriceHandler &&
                    deliveryPriceHandler(event.target.value)
                  }
                  className="s-c top"
                  type="radio"
                  name={`${id}`}
                  value={`${datas[option].value}`}
                />

                <div className="label">
                  <Icon
                    className="LabelIcon"
                    icon={`${datas[option].icon}`}
                    width="32"
                  />
                  <span className="LabelText">{`${datas[option].value}`}</span>
                </div>

                <span className="opt-val">
                  <Icon
                    className="LabelIcon"
                    icon={`${datas[option].icon}`}
                    width="32"
                  />
                  <span className="LabelText">{`${datas[option].value}`}</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
