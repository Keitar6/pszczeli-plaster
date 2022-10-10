import Button, {
  BUTTON_TYPE_CLASSES
} from "components/button/button.component";
import { useAppDispatch, useAppSelector } from "hooks/hooks";

import { useForm } from "react-hook-form";
import { setCartItems } from "store/cartReducer/cart.actions";
import {
  selectCartItems,
  selectCartTotal
} from "store/cartReducer/cart.selector";
import {
  setDelivery,
  setOrderHistory
} from "store/generalPropReducer/generalProp.actions";
import {
  DeliveryData,
  DeliveryType
} from "store/generalPropReducer/generalProp.reducer";
import {
  selectDelivery,
  selectOrderHistory
} from "store/generalPropReducer/generalProp.selector";

import { generateId } from "utils/reusableFunctions/generateId.function";
import { getCurrentTime } from "utils/reusableFunctions/getTime.function";
import { orderCreator } from "utils/store/orderCreator.utils";
import {
  FormButton,
  FormButtons,
  NonValidFormInput
} from "./checkoutForm.styles";

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
  const orderId = generateId(8);

  const formData: DeliveryData = {
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

  const deliveryOptions = {
    none: { value: "None", label: "None" },
    poczta: { value: "Poczta Polska", label: "Poczta Polska" },
    dhl: { value: "Kurier DHL", label: "Kurier DHL" },
    inpost: { value: "Kurier Inpost", label: "Kurier Inpost" },
    fedex: { value: "Kurier FedEx", label: "Kurier FedEx" }
  };

  const addToOrderHistoryHandler = (formData: DeliveryData) => {
    dispatch(
      setOrderHistory(
        orderHistory,
        orderCreator(
          orderId,
          getCurrentTime(),
          totalPrice + deliveryInfo.price,
          cartItems,
          formData,
          deliveryInfo.price
        )
      )
    );
    dispatch(setCartItems([]));
  };

  const deliveryPriceHandler = (deliveryType: string) => {
    dispatch(
      setDelivery(deliveryType.replace(/\s+/g, "") as DeliveryType["type"])
    );
  };

  return (
    <>
      <FormButtons>
        <FormButton>
          <Button buttonType={BUTTON_TYPE_CLASSES.loginCheckout}>
            Logowanie
          </Button>
        </FormButton>
        <FormButton>
          <Button buttonType={BUTTON_TYPE_CLASSES.loginCheckout}>
            Rejestracja
          </Button>
        </FormButton>
      </FormButtons>

      <form
        onSubmit={handleSubmit((formData) =>
          addToOrderHistoryHandler(formData)
        )}
        className="was-validated align-items-center"
      >
        <div>
          <div>
            {/* <CheckoutFormInput id= /> */}

            <label htmlFor={`${formData.name}`}>Imię</label>
            <input
              type="text"
              id={`${formData.name}`}
              placeholder="Imię"
              {...register(`${formData.name}`, {
                required: true,
                minLength: 2
              })}
            />
            {errors.name && (
              <NonValidFormInput>Sprawdź proszę wpisane imie</NonValidFormInput>
            )}
          </div>
          <div>
            <label htmlFor={`${formData.lastName}`}>Nazwisko</label>
            <input
              type="text"
              id={`${formData.lastName}`}
              placeholder="Nazwisko"
              {...register(`${formData.lastName}`, {
                required: true,
                pattern: /^[A-Za-z]+$/i
              })}
            />
            {errors.lastName && (
              <NonValidFormInput>
                Sprawdź proszę wpisane nazwisko{" "}
              </NonValidFormInput>
            )}
          </div>
          <div>
            <label htmlFor={`${formData.email}`}>E-mail</label>
            <input
              type="text"
              id={`${formData.email}`}
              placeholder="E-mail"
              {...register(`${formData.email}`, {
                required: true,
                pattern:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              })}
            />
            {errors.email && (
              <NonValidFormInput>
                Sprawdź proszę wpisany email
              </NonValidFormInput>
            )}
          </div>
        </div>
        <div>
          <label htmlFor={`${formData.street}`}>Ulica</label>
          <input
            type="text"
            id={`${formData.street}`}
            placeholder="Ul. nazwa"
            {...register(`${formData.street}`, {
              required: true,
              minLength: 1
            })}
          />
          {errors.street && (
            <NonValidFormInput>Sprawdź proszę wpisaną ulicę </NonValidFormInput>
          )}
        </div>
        <div className="form-group my-3">
          <label htmlFor={`${formData.homeAdress}`}>Numer domu</label>
          <input
            type="text"
            id={`${formData.homeAdress}`}
            placeholder="Nr klatki, nr mieszkania / domu"
            {...register(`${formData.homeAdress}`, {
              required: true,
              minLength: 1
            })}
          />
          {errors.homeAdress && (
            <NonValidFormInput>
              Sprawdź proszę wpisany adres domowy{" "}
            </NonValidFormInput>
          )}
        </div>
        <div>
          <div>
            <label htmlFor={`${formData.city}`}>Miasto</label>
            <input
              type="text"
              id={`${formData.city}`}
              {...register(`${formData.city}`, {
                required: true,
                minLength: 1
              })}
            />
            {errors.city && (
              <NonValidFormInput>
                Sprawdź proszę wpisane miasto{" "}
              </NonValidFormInput>
            )}
          </div>

          <div>
            <label htmlFor={`${formData.zip}`}>Kod pocztowy</label>
            <input
              type="text"
              placeholder="123456"
              id={`${formData.zip}`}
              {...register(`${formData.zip}`, {
                required: true,
                minLength: 1
              })}
            />
            {errors.zip && (
              <NonValidFormInput>
                Sprawdź proszę kod pocztowy{" "}
              </NonValidFormInput>
            )}
          </div>
        </div>
        <div>
          <div>
            <label htmlFor={`${formData.deliveryMethod}`}>Sposób dostawy</label>
            <select
              id={`${formData.deliveryMethod}`}
              {...register(`${formData.deliveryMethod}`, { required: true })}
              onChange={(event) => deliveryPriceHandler(event.target.value)}
            >
              <option></option>
              <option value={`${deliveryOptions.poczta.value}`}>
                {`${deliveryOptions.poczta.value}`}
              </option>
              <option
                value={`${deliveryOptions.dhl.value}`}
              >{`${deliveryOptions.dhl.value}`}</option>
              <option
                value={`${deliveryOptions.inpost.value}`}
              >{`${deliveryOptions.inpost.value}`}</option>
              <option
                value={`${deliveryOptions.fedex.value}`}
              >{`${deliveryOptions.fedex.value}`}</option>
            </select>
            {errors.deliveryMethod && (
              <NonValidFormInput>
                Wybierz proszę sposób dostawy{" "}
              </NonValidFormInput>
            )}
          </div>
          <div>
            <label htmlFor={`${formData.payMethod}`}>Metoda płatności</label>
            <select
              id={`${formData.payMethod}`}
              defaultValue={"..."}
              {...register(`${formData.payMethod}`, { required: true })}
            >
              <option></option>
              <option>Blik</option>
              <option>Za pobraniem</option>
              <option>Przelew tradycyjny</option>
            </select>
            {errors.payMethod && (
              <NonValidFormInput>
                Wybierz proszę metodę płatności{" "}
              </NonValidFormInput>
            )}
          </div>
        </div>
        <div>
          <div>
            <label htmlFor={`${formData.terms}`}>
              <input
                type="checkbox"
                id={`${formData.terms}`}
                {...register(`${formData.terms}`, { required: true })}
              />
              {errors.terms && (
                <NonValidFormInput>Wymagana jest zgoda </NonValidFormInput>
              )}
              Zgadzam się na warunki i zasady
            </label>
          </div>
        </div>
        <div>
          <Button
            id="submitFormButton"
            type="submit"
            buttonType={BUTTON_TYPE_CLASSES.loginCheckout}
          >
            Zamawiaj
          </Button>
        </div>
      </form>
    </>
  );
};
