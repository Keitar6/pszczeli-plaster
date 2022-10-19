import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import ComponentsRenderer from "react-test-renderer";
import { CheckoutFormSelect } from "../checkoutFormInputs/selectInput/checkoutFormSelect.component";
import { FormButtons } from "../formButtons/formButtons.component";

describe("checkoutFroms", () => {
  test("CheckoutFormSelect", () => {
    const submitHandler = jest.fn();
    const component = ComponentsRenderer.create(
      <FormButtons submitHandler={submitHandler} />
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  // test("CheckoutFormSelect - selectButtony i errory", () => {
  //   const register = jest.fn();
  //   const mockErrorDelivery:
  //     | FieldError
  //     | Merge<FieldError, FieldErrorsImpl<any>>
  //     | undefined = undefined;

  //   const mockErrorPay:
  //     | FieldError
  //     | Merge<FieldError, FieldErrorsImpl<any>>
  //     | undefined = undefined;

  //   const component = ComponentsRenderer.create(
  //     <CheckoutFormSelect
  //       idDelivery="AJDIDel"
  //       idPayment="AJDIPay"
  //       register={register}
  //       errorPayment={mockErrorPay}
  //       errorDelivery={mockErrorDelivery}
  //     />
  //   ).toJSON();
  //   expect(component).toMatchSnapshot();
  // });
});
