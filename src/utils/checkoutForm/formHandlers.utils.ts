import { FormData, formData } from "./checkoutForm.utils";

export const resetFormHandler = (updateData: FormData = formData) => {
  const tempUpdateValues: FormData = {};
  Object.keys(updateData).forEach((inputId) => {
    return (tempUpdateValues[inputId] = "");
  });

  return tempUpdateValues;
};
