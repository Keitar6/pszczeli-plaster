import { renderWithProviders } from "../../../utils/testsMocking/mockStoreProvider";
import { FormButtons } from "../formButtons/formButtons.component";

describe("checkoutFroms", () => {
  test("formButtons", () => {
    const submitHandler = jest.fn();
    const component = renderWithProviders(
      <FormButtons submitHandler={submitHandler} />
    );
    expect(component).toMatchSnapshot();
    const submitHandle = component.getByTestId("submit");
    expect(submitHandle).toBeTruthy();
    submitHandle.click();

    expect(submitHandler).toHaveBeenCalledTimes(1);
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
