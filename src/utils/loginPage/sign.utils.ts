export const signUpData = {
  name: "name",
  lastName: "lastName",
  email: "email",
  password: "password"
};

export const signInData = {
  email: "email",
  password: "password"
};

export type SignDataInputMapItem = {
  name: string;
  placeholder: string;
  text: string;
  inputType: string;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  width?: string;
};

export const signValidationPatterns = {
  lastNamePattern: new RegExp(/^[A-Za-z]+$/i),
  zipCodePattern: new RegExp(/^([0-9]{2}-)?[0-9]{3}$/),
  namePattern: new RegExp(/^([ \u00c0-\u01ffa-zA-Z'])+$/),
  cityPattern: new RegExp(/^([ \u00c0-\u01ffa-zA-Z'])+$/),
  streetPattern: new RegExp(/^([ \u00c0-\u01ffa-zA-Z'])+$/),
  homeAdressPattern: new RegExp(/^([0-9])+$/),
  eMailPattern: new RegExp(
    /^(([A-Za-z0-9]+_+)|([A-Za-z0-9]+-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6}$/
  ),
  passwordPattern: new RegExp(
    /(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/
  )
};

export type SignDataInputMap = {
  [key: string]: SignDataInputMapItem;
};

export const signDataInputMap: SignDataInputMap = {
  email: {
    name: signInData.email,
    placeholder: "E-mail",
    text: "E-mail musi być w poprawnym formacie: 'abc@def.com' ",
    minLength: 1,
    pattern: signValidationPatterns.eMailPattern,
    inputType: "email",
    width: "48%"
  },
  password: {
    name: signInData.password,
    placeholder: "Hasło",
    text: "Hasło musi mieć min 8 znaków, conajmniej jedną dużą, znak specjalny oraz cyfrę",
    minLength: 8,
    pattern: signValidationPatterns.passwordPattern,
    inputType: "password",
    width: "48%"
  },
  name: {
    name: signUpData.name,
    placeholder: "Imię",
    text: "Imię musi mieć min 1 literę",
    minLength: 1,
    pattern: signValidationPatterns.namePattern,
    inputType: "name",
    width: "48%"
  },
  lastName: {
    name: signUpData.lastName,
    placeholder: "Nazwisko",
    text: "Nazwisko musi mieć min 1 literę",
    minLength: 1,
    pattern: signValidationPatterns.lastNamePattern,
    inputType: "surname",
    width: "48%"
  }
};
