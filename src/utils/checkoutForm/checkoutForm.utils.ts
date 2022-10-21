import { generateId } from "../../utils/reusableFunctions/generateId.function";

export const orderId = generateId(8);

export const validationPatterns = {
  lastNamePattern: new RegExp(/^[A-Za-z]+$/i),
  zipCodePattern: new RegExp(/^([0-9]{2}-)?[0-9]{3}$/),
  namePattern: new RegExp(/^([ \u00c0-\u01ffa-zA-Z'])+$/),
  cityPattern: new RegExp(/^([ \u00c0-\u01ffa-zA-Z'])+$/),
  streetPattern: new RegExp(/^([ \u00c0-\u01ffa-zA-Z'])+$/),
  homeAdressPattern: new RegExp(/^([0-9])+$/),
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
  payMethod: "payMethod",
  terms: "terms"
};

export type FormDataInputMapItem = {
  name: string;
  placeholder: string;
  text: string;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  width?: string;
};

export type FormDataInputMap = {
  [key in keyof typeof formData]: FormDataInputMapItem;
};

export type DeliveryOptions = {
  [key in keyof typeof formData]: { value: string; icon: string };
};

export const formDataInputMap: FormDataInputMap = {
  name: {
    name: formData.name,
    placeholder: "Imię",
    text: "Proszę wpisać imię nie używając znaków specjalnych",
    minLength: 1,
    pattern: validationPatterns.namePattern,
    width: "40%"
  },
  lastName: {
    name: formData.lastName,
    placeholder: "Nazwisko",
    text: "Wpisz nazwisko nie używając znaków specjalnych",
    minLength: 1,
    pattern: validationPatterns.lastNamePattern,
    width: "56%"
  },
  email: {
    name: formData.email,
    placeholder: "E-mail",
    text: "Uzupełnij e-mail w formacie 'abcde@acbc.com' nie używając znaków specjalnych",
    minLength: 1,
    pattern: validationPatterns.eMailPattern,
    width: "58%"
  },
  city: {
    name: formData.city,
    placeholder: "Miasto",
    text: "Wypełnij tę rubrykę nie używając znaków specjalnych",
    minLength: 1,
    pattern: validationPatterns.cityPattern,
    width: "38%"
  },
  street: {
    name: formData.street,
    placeholder: "Nazwa ulicy",
    text: "To pole jest potrzebne, wpisz poprawną wartość bez używania znaków specjalnych",
    minLength: 1,
    pattern: validationPatterns.streetPattern,
    width: ""
  },
  homeAdress: {
    name: formData.homeAdress,
    placeholder: "Numer domu",
    text: "Wymagane polę, uzupełnij nie używając znaków specjalnych",
    minLength: 2,
    pattern: validationPatterns.homeAdressPattern,
    width: "30%"
  },
  zip: {
    name: formData.zip,
    placeholder: "Zip",
    text: "Kod pocztowy musi być w formacie XX-XXX",
    minLength: 5,
    pattern: validationPatterns.zipCodePattern,
    width: "5rem"
  }
};

export const deliveryOptions: DeliveryOptions = {
  poczta: { value: "Poczta Polska", icon: "fluent-emoji:post-office" },
  dhl: { value: "Kurier DHL", icon: "fa6-brands:dhl" },
  inpost: { value: "Kurier Inpost", icon: "arcticons:inpost-mobile" },
  fedex: { value: "Kurier FedEx", icon: "cib:fedex" }
};

export const paymentOptions = {
  blik: { value: "Blik", icon: "akar-icons:mobile-device" },
  przelew: { value: "Przelew tradycyjny", icon: "icon-park:bank-transfer" },
  zaPobraniem: { value: "Za pobraniem", icon: "fluent:money-hand-20-regular" }
};
