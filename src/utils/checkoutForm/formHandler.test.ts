import { formData } from "./checkoutForm.utils";
import { resetFormHandler } from "./formHandlers.utils";

const mockData = {
  id: "dKror?",
  time: "baKr##!or",
  price: "!ror"
};

const mockDataReturn = {
  id: "",
  time: "",
  price: ""
};

const formDataMock = {
  name: "",
  lastName: "",
  email: "",
  deliveryMethod: "",
  city: "",
  homeAdress: "",
  street: "",
  zip: "",
  payMethod: "",
  terms: ""
};

test("orderCreator Test", () => {
  expect.assertions(2);
  expect(resetFormHandler(mockData)).toEqual(mockDataReturn);
  expect(resetFormHandler(formData)).toEqual(formDataMock);
});
