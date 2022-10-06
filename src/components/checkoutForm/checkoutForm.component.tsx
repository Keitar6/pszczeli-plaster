import "bootstrap/dist/css/bootstrap.min.css";

import Button, {
  BUTTON_TYPE_CLASSES
} from "components/button/button.component";

import { useForm } from "react-hook-form";
import { FormButton, FormButtons } from "./checkoutForm.styles";

export const CheckoutForm = () => {
  const { register, handleSubmit } = useForm();

  const formData = {
    name: "name",
    lastName: "lastName",
    deliveryMethod: "deliveryMethod",
    city: "city",
    homeAdress: "homeAdress",
    state: "state",
    street: "street",
    zip: "zip",
    payMethod: "payMethod",
    subscription: "subscription"
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
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
        className="was-validated align-items-center"
      >
        <div className="form-group row my-3 ">
          <div className="form-group col-md-6 mt-2">
            <label htmlFor={`${formData.name}`} className="form-label">
              Imie
            </label>
            <input
              type="text"
              className="form-control"
              id={`${formData.name}`}
              placeholder="Imie"
              {...register(`${formData.name}`)}
              required
            />
            <div className="valid-feedback"></div>
            <div className="invalid-feedback"></div>
          </div>
          <div className="form-group col-md-6 mt-2">
            <label htmlFor={`${formData.lastName}`} className="form-label">
              Nazwisko
            </label>
            <input
              type="text"
              className="form-control"
              id={`${formData.lastName}`}
              placeholder="Nazwisko"
              {...register(`${formData.lastName}`)}
              required
            />
            <div className="valid-feedback"></div>
            <div className="invalid-feedback"></div>
          </div>
        </div>
        <div className="form-group mt-2">
          <label htmlFor={`${formData.street}`} className="form-label">
            Ulica
          </label>
          <input
            type="text"
            className="form-control"
            id={`${formData.street}`}
            placeholder="Ul. nazwa"
            {...register(`${formData.street}`)}
            required
          />
          <div className="valid-feedback"></div>
          <div className="invalid-feedback"></div>
        </div>
        <div className="form-group my-3">
          <label htmlFor={`${formData.homeAdress}`} className="form-label">
            Numer domu
          </label>
          <input
            type="text"
            className="form-control"
            id={`${formData.homeAdress}`}
            placeholder="Nr klatki, nr mieszkania / domu"
            {...register(`${formData.homeAdress}`)}
            required
          />
          <div className="valid-feedback"></div>
          <div className="invalid-feedback"></div>
        </div>
        <div className="form-group row my-3">
          <div className="form-group col-md-4">
            <label htmlFor={`${formData.city}`} className="form-label">
              Miasto
            </label>
            <input
              type="text"
              className="form-control"
              id={`${formData.city}`}
              {...register(`${formData.city}`)}
              required
            />
            <div className="valid-feedback"></div>
            <div className="invalid-feedback"></div>
          </div>
          <div className="form-group col-md-4">
            <label htmlFor={`${formData.state}`} className="form-label">
              Województwo
            </label>
            <select
              id={`${formData.state}`}
              className="form-control"
              defaultValue={"..."}
              {...register(`${formData.state}`)}
              required
            >
              <option></option>
              <option>Dolnośląskie</option>
              <option>Mazowieckie</option>
              <option>Opolskie</option>
            </select>
            <div className="valid-feedback"></div>
            <div className="invalid-feedback"></div>
          </div>
          <div className="form-group col-md-4">
            <label htmlFor={`${formData.zip}`} className="form-label">
              Kod pocztowy
            </label>
            <input
              type="text"
              className="form-control"
              id={`${formData.zip}`}
              {...register(`${formData.zip}`)}
              required
            />
            <div className="valid-feedback"></div>
            <div className="invalid-feedback"></div>
          </div>
        </div>
        <div className="form-group row px-auto ">
          <div className="form-group col-sm-6">
            <label
              htmlFor={`${formData.deliveryMethod}`}
              className="form-label"
            >
              Opcje dostawy
            </label>
            <select
              id={`${formData.deliveryMethod}`}
              className="form-control"
              defaultValue={"..."}
              {...register(`${formData.deliveryMethod}`)}
              required
            >
              <option></option>
              <option>Poczta Polska</option>
              <option>Kurier DHL</option>
              <option>Kurier Inpost</option>
              <option>Kurier FedEx</option>
            </select>
            <div className="valid-feedback"></div>
            <div className="invalid-feedback"></div>
          </div>
          <div className="form-group col-sm-6">
            <label htmlFor={`${formData.payMethod}`} className="form-label">
              Opcje płatności
            </label>
            <select
              id={`${formData.payMethod}`}
              className="form-control"
              defaultValue={"..."}
              {...register(`${formData.payMethod}`)}
              required
            >
              <option></option>
              <option>Blik</option>
              <option>Za pobraniem</option>
              <option>Przelew tradycyjny</option>
            </select>
            <div className="valid-feedback"></div>
            <div className="invalid-feedback"></div>
          </div>
        </div>
        <div className="form-group my-3">
          <div className="form-check">
            <label
              className="form-check-label"
              htmlFor={`${formData.subscription}`}
            >
              Zgadzam się na warunki
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              id={`${formData.subscription}`}
              {...register(`${formData.subscription}`)}
              required
            />
            <div className="valid-feedback"></div>
            <div className="invalid-feedback">
              Aby dokonać zakupu musisz zgodzić się na obowiązujące warunki
            </div>
          </div>
        </div>
        <div className="form-group row mx-auto">
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
