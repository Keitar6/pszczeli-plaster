import { generateId } from "utils/reusableFunctions/generateId.function";

export const orderId = generateId(8);

export const validationPatterns = {
  lastNamePattern: new RegExp(/^[A-Za-z]+$/i),
  zipCodePattern: new RegExp(/^([0-9]{2}-)?[0-9]{3}$/),
  namePattern: new RegExp(/^([ \u00c0-\u01ffa-zA-Z'])+$/),
  cityPattern: new RegExp(/^([ \u00c0-\u01ffa-zA-Z'])+$/),
  streetPattern: new RegExp(/^([ \u00c0-\u01ffa-zA-Z'])+$/),
  homeAdressPattern: new RegExp(/^([ \u00c0-\u01ffa-zA-Z'])+$/),
  eMailPattern: new RegExp(
    /^(([A-Za-z0-9]+_+)|([A-Za-z0-9]+-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6}$/
  )
};

export type FormData = {
  [key: string]: string;
};

export const formData: FormData = {
  name: "name",
  lastName: "lastName",
  email: "email",
  deliveryMethod: "deliveryMethod",
  city: "city",
  homeAdress: "homeAdress",
  street: "street",
  zip: "zip",
  payMethod: "payMethod"
};

export type FormDataInputMapItem = {
  name: string;
  placeholder: string;
  text: string;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
};

export type FormDataInputMap = {
  [key in keyof typeof formData]: FormDataInputMapItem;
};

export const formDataInputMap: FormDataInputMap = {
  name: {
    name: formData.name,
    placeholder: "Imię",
    text: "Proszę wpisać imię nie używając znaków specjalnych",
    minLength: 1,
    pattern: validationPatterns.namePattern
  },
  lastName: {
    name: formData.lastName,
    placeholder: "Nazwisko",
    text: "Wpisz nazwisko nie używając znaków specjalnych",
    minLength: 1,
    pattern: validationPatterns.lastNamePattern
  },
  email: {
    name: formData.email,
    placeholder: "E-mail",
    text: "Uzupełnij e-mail w formacie 'abcde@acbc.com' nie używając znaków specjalnych",
    minLength: 1,
    pattern: validationPatterns.eMailPattern
  },
  city: {
    name: formData.city,
    placeholder: "Miasto",
    text: "Wypełnij tę rubrykę nie używając znaków specjalnych",
    minLength: 1,
    pattern: validationPatterns.cityPattern
  },
  homeAdress: {
    name: formData.homeAdress,
    placeholder: "Numer domu",
    text: "Wymagane polę, uzupełnij nie używając znaków specjalnych",
    minLength: 2,
    pattern: validationPatterns.homeAdressPattern
  },
  street: {
    name: formData.street,
    placeholder: "Nazwa ulicy",
    text: "To pole jest potrzebne, wpisz poprawną wartość bez używania znaków specjalnych",
    minLength: 1,
    pattern: validationPatterns.streetPattern
  },
  zip: {
    name: formData.zip,
    placeholder: "Zip",
    text: "Kod pocztowy musi być w formacie XX-XXX",
    minLength: 5,
    pattern: validationPatterns.zipCodePattern
  }
};

export const deliveryOptions = {
  none: { value: "None", label: "None" },
  poczta: { value: "Poczta Polska", label: "Poczta Polska" },
  dhl: { value: "Kurier DHL", label: "Kurier DHL" },
  inpost: { value: "Kurier Inpost", label: "Kurier Inpost" },
  fedex: { value: "Kurier FedEx", label: "Kurier FedEx" }
};

export const paymentOptions = {
  none: { value: "None", label: "None" },
  blik: { value: "Blik", label: "Blik" },
  przelew: { value: "Przelew tradycyjny", label: "Przelew tradycyjny" },
  zaPobraniem: { value: "Za pobraniem", label: "Za pobraniem" }
};
