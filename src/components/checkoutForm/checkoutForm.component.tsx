import { useAppDispatch, useAppSelector } from "hooks/hooks";
import { useForm } from "react-hook-form";
import { setCartItems } from "store/cartReducer/cart.actions";
import {
  selectCartItems,
  selectCartTotal
} from "store/cartReducer/cart.selector";
import { postOrderHistoryAsync } from "store/orderHistory/orderHistory.action";
import {
  selectDelivery,
  selectOrderHistory
} from "store/orderHistory/orderHistory.selector";
import { DeliveryData } from "store/orderHistory/orderHistory.types";
import {
  formData,
  formDataInputMap,
  orderId
} from "utils/checkoutForm/checkoutForm.utils";
import { getCurrentTime } from "utils/reusableFunctions/getTime.function";
import { orderCreator } from "utils/store/orderCreator.utils";
import {
  NonValidFormInput,
  Form,
  FormTextInputs,
  InputCheckbox
} from "./checkoutForm.styles";
import { CheckoutFormInput } from "./checkoutFormInputs/textInput/checkoutFormInput.component";
import { CheckoutFormSelect } from "./checkoutFormInputs/selectInput/checkoutFormSelect.component";
import { FormButtons } from "./formButtons/formButtons.component";

export const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const dispatch = useAppDispatch();
  const orderHistory = useAppSelector(selectOrderHistory);
  const totalPrice = useAppSelector(selectCartTotal);
  const cartItems = useAppSelector(selectCartItems);
  const deliveryInfo = useAppSelector(selectDelivery);
  const deliveryPrice = deliveryInfo.price ? deliveryInfo.price : 0;

  const addToOrderHistoryHandler = (formData: DeliveryData) => {
    console.log(formData);

    dispatch(
      postOrderHistoryAsync(
        orderHistory,
        orderCreator(
          orderId,
          getCurrentTime(),
          totalPrice + deliveryPrice,
          cartItems,
          formData,
          deliveryPrice
        )
      )
    );
    dispatch(setCartItems([]));
  };
  return (
    <>
      <Form className="was-validated">
        <FormTextInputs>
          {Object.keys(formDataInputMap).map((input) => {
            const {
              name,
              text,
              placeholder,
              minLength = 2,
              pattern,
              width = "5rem",
              ...restArgs
            } = formDataInputMap[input];
            return (
              <CheckoutFormInput
                id={name}
                register={register}
                pattern={pattern}
                minLength={minLength}
                placeholder={placeholder}
                errorName={errors[name]}
                width={width}
                key={name}
                {...restArgs}
              >
                {text}
              </CheckoutFormInput>
            );
          })}
        </FormTextInputs>
        <CheckoutFormSelect
          idPayment={formData.payMethod as string}
          idDelivery={formData.deliveryMethod as string}
          register={register}
          errorPayment={errors.payMethod}
          errorDelivery={errors.deliveryMethod}
        />
        <div>
          <label htmlFor={`${formData.terms}`}>
            <InputCheckbox
              type="checkbox"
              id={`${formData.terms}`}
              {...register(`${formData.terms}`, { required: true })}
            />
            Zgadzam się na warunki i zasady
            {errors.terms && (
              <NonValidFormInput>Wymagana jest zgoda </NonValidFormInput>
            )}
          </label>
        </div>
        <FormButtons
          submitHandler={handleSubmit((formData) =>
            addToOrderHistoryHandler(formData)
          )}
        />
      </Form>
    </>
  );
};
