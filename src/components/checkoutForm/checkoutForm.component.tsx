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
import { setOrderHistory } from "store/userReducer/user.actions";
import { DeliveryData } from "store/userReducer/user.reducer";
import { selectOrderHistory } from "store/userReducer/user.selector";
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
  const orderId = generateId(8);

  const formData: DeliveryData = {
    name: "name",
    lastName: "lastName",
    email: "email",
    deliveryMethod: "deliveryMethod",
    city: "city",
    homeAdress: "homeAdress",
    state: "state",
    street: "street",
    zip: "zip",
    payMethod: "payMethod",
    terms: "terms"
  };

  const addToOrderHistoryHandler = (formData: DeliveryData) => {
    dispatch(
      setOrderHistory(
        orderHistory,
        orderCreator(orderId, getCurrentTime(), totalPrice, cartItems, formData)
      )
    );

    dispatch(setCartItems([]));
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
            <label htmlFor={`${formData.name}`}>Imie</label>
            <input
              type="text"
              id={`${formData.name}`}
              placeholder="Imie"
              {...register(`${formData.name}`, {
                required: true,
                minLength: 8
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
            <label htmlFor={`${formData.email}`}>Email</label>
            <input
              type="text"
              id={`${formData.email}`}
              placeholder="Email"
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
            <label htmlFor={`${formData.state}`}>Województwo</label>
            <select
              id={`${formData.state}`}
              defaultValue={"..."}
              {...register(`${formData.state}`)}
            >
              <option></option>
              <option>Dolnośląskie</option>
              <option>Mazowieckie</option>
              <option>Opolskie</option>
            </select>
            {errors.state && (
              <NonValidFormInput>Wybierz proszę województwo </NonValidFormInput>
            )}
          </div>
          <div>
            <label htmlFor={`${formData.zip}`}>Kod pocztowy</label>
            <input
              type="text"
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
            <label htmlFor={`${formData.deliveryMethod}`}>Opcje dostawy</label>
            <select
              id={`${formData.deliveryMethod}`}
              defaultValue={"..."}
              {...register(`${formData.deliveryMethod}`, { required: true })}
            >
              <option disabled>...</option>
              <option>Poczta Polska</option>
              <option>Kurier DHL</option>
              <option>Kurier Inpost</option>
              <option>Kurier FedEx</option>
            </select>
            {errors.deliveryMethod && (
              <NonValidFormInput>
                Wybierz proszę sposób dostawy{" "}
              </NonValidFormInput>
            )}
          </div>
          <div>
            <label htmlFor={`${formData.payMethod}`}>Opcje płatności</label>
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
