import "bootstrap/dist/css/bootstrap.min.css";
import Button, {
  BUTTON_TYPE_CLASSES
} from "components/button/button.component";

export const CheckoutForm = () => {
  return (
    <form>
      <div className="form-group row mx-auto">
        <div className="form-group col-md-6">
          <Button buttonType={BUTTON_TYPE_CLASSES.loginCheckout}>
            Logowanie
          </Button>
        </div>
        <div className="form-group col-md-6">
          <Button buttonType={BUTTON_TYPE_CLASSES.loginCheckout}>
            Rejestracja
          </Button>
        </div>
      </div>
      <div className="form-group mt-2">
        <label htmlFor="inputAddress">Ulica</label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="Ul. nazwa"
        />
      </div>
      <div className="form-group my-3">
        <label htmlFor="inputAddress2">Numer domu</label>
        <input
          type="text"
          className="form-control"
          id="inputAddress2"
          placeholder="Nr klatki, nr mieszkania / domu"
        />
      </div>
      <div className="form-group row my-3">
        <div className="form-group col-md-4">
          <label htmlFor="inputCity">Miasto</label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="inputState">Województwo</label>
          <select id="inputState" className="form-control">
            <option selected>Wybierz</option>
            <option>...</option>
          </select>
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="inputZip">Kod pocztowy</label>
          <input type="text" className="form-control" id="inputZip" />
        </div>
      </div>
      <div className="form-group mb-2">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck" />
          <label className="form-check-label" htmlFor="gridCheck">
            Zasubskrybuj
          </label>
        </div>
      </div>
      <div className="form-group row mx-auto">
        <Button buttonType={BUTTON_TYPE_CLASSES.loginCheckout}>Zamawiaj</Button>
      </div>
    </form>
  );
};
