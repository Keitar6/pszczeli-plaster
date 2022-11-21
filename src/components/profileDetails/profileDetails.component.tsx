import { FieldValues, useForm } from "react-hook-form";
import { Title } from "../../global.styles";
import {
  Form,
  FormTextInputs
} from "../../globalStyles/form/form.globalStyles";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  setCurrentUserFormData,
  toggleProfileEditingMode
} from "../../store/userReducer/user.actions";
import {
  selectCurrentUserFormData,
  selectIsProfileEditingModeOn
} from "../../store/userReducer/user.selector";
import { formDataInputMap } from "../../utils/checkoutForm/checkoutForm.utils";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { CheckoutFormInput } from "../checkoutForm/checkoutFormInputs/textInput/checkoutFormInput.component";
import { ProfileDetailsContainer } from "./profileDetails.styles";

export const ProfileDetails = ({ name }: { name: string }) => {
  const isEditingModeOn = useAppSelector(selectIsProfileEditingModeOn);
  const usersProfileData = useAppSelector(selectCurrentUserFormData);

  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const changeProfileDataHandler = (formData: FieldValues) => {
    // const { name, lastName, email, password } = formData;
    // const formDataWithDisplayName = {
    //   displayName: name + lastName,
    //   ...formData
    // };
    // dispatch(setCurrentUserFormData(formDataWithDisplayName));
    dispatch(toggleProfileEditingMode());
    console.log(formData);
  };

  const startProfileEditingHandler = () => {
    dispatch(toggleProfileEditingMode());
  };

  const resetChangesHandler = () => {
    // reset temporarki

    //wyłączenie trybu edycji
    dispatch(toggleProfileEditingMode());
  };

  return (
    <ProfileDetailsContainer>
      <Title>Szczegóły konta {name}</Title>

      <Form>
        <FormTextInputs>
          {Object.keys(formDataInputMap).map((input) => {
            const {
              name,
              text,
              placeholder,
              minLength = 2,
              pattern,
              ...restArgs
            } = formDataInputMap[input];
            return (
              <CheckoutFormInput
                id={name}
                register={register}
                pattern={pattern}
                minLength={minLength}
                placeholder={placeholder}
                errorName={errors[name]}
                key={name}
                disabledText={true}
                {...restArgs}
              >
                {text}
              </CheckoutFormInput>
            );
          })}
        </FormTextInputs>
        {isEditingModeOn ? (
          <>
            <Button
              buttonType={BUTTON_TYPE_CLASSES.formButton}
              onClick={() => {
                handleSubmit((formData) => {
                  changeProfileDataHandler(formData);
                });
              }}
            >
              Akceptuj zmiany
            </Button>

            <Button
              buttonType={BUTTON_TYPE_CLASSES.formButton}
              onClick={(e) => {
                e.preventDefault();

                resetChangesHandler();
              }}
            >
              Cofnij zmiany
            </Button>
          </>
        ) : (
          <Button
            buttonType={BUTTON_TYPE_CLASSES.formButton}
            onClick={(e) => {
              e.preventDefault();

              startProfileEditingHandler();
            }}
          >
            Edytuj dane
          </Button>
        )}
      </Form>
    </ProfileDetailsContainer>
  );
};
