import { type User } from "firebase/auth";
import { FieldValues, useForm } from "react-hook-form";
import { Title } from "../../global.styles";
import {
  Form,
  FormTextInputs
} from "../../globalStyles/form/form.globalStyles";
import { FormButtons } from "../../globalStyles/form/formButtons/formButtons.component";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { toggleProfileEditingMode } from "../../store/userReducer/user.actions";
import {
  selectCurrentUser,
  selectCurrentUserFormData,
  selectIsProfileEditingModeOn
} from "../../store/userReducer/user.selector";
import { type ProfileDetailsType } from "../../store/userReducer/user.types";
import { formDataInputMap } from "../../utils/checkoutForm/checkoutForm.utils";
import { updateProfileInformationInDoc } from "../../utils/firebase/functions/dbManipulationFunctions.FBFunctions";
import { objectByStringFinder } from "../../utils/reusableFunctions/inObjectFinder.function";
import {
  profileDetailsCreator,
  profileDetailsWithNoEmailAndPassword
} from "../../utils/reusableFunctions/profileDetailsCreator.Functions";
import { refresh } from "../../utils/reusableFunctions/refresh.function";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { CheckoutFormInput } from "../checkoutForm/checkoutFormInputs/textInput/checkoutFormInput.component";
import { ProfileDetailsContainer } from "./profileDetails.styles";

export const ProfileDetails = ({ name }: { name: string }) => {
  const isEditingModeOn = useAppSelector(selectIsProfileEditingModeOn);
  const usersProfileDBData = useAppSelector(selectCurrentUserFormData);
  const currentUser = useAppSelector(selectCurrentUser);
  const userFormData = profileDetailsCreator(usersProfileDBData);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const changeProfileDataHandler = (formData: FieldValues) => {
    const formDataWithNoEmailAndPassword = profileDetailsWithNoEmailAndPassword(
      formData as ProfileDetailsType
    );

    console.log(formData, formDataWithNoEmailAndPassword, usersProfileDBData);
    // eslint-disable-next-line no-debugger
    debugger;
    currentUser &&
      updateProfileInformationInDoc(
        currentUser as User,
        formDataWithNoEmailAndPassword,
        usersProfileDBData
      );
    dispatch(toggleProfileEditingMode());
  };

  const startProfileEditingHandler = () => {
    dispatch(toggleProfileEditingMode());
  };

  const resetChangesHandler = () => {
    dispatch(toggleProfileEditingMode());
  };

  return (
    <ProfileDetailsContainer>
      <Title>Szczegóły konta {name}</Title>

      <Form>
        <FormTextInputs>
          {Object.keys(formDataInputMap).map((input) => {
            const {
              minLength = 2,
              pattern,
              text,
              ...restArgs
            } = formDataInputMap[input];
            const formValue = objectByStringFinder(userFormData, input);
            return (
              <CheckoutFormInput
                {...restArgs}
                id={input}
                idPlus=""
                register={register}
                pattern={pattern}
                minLength={minLength}
                errorName={errors[input]}
                key={input}
                disabledText={!isEditingModeOn}
                initValue={formValue}
              >
                {text}
              </CheckoutFormInput>
            );
          })}
        </FormTextInputs>
        {isEditingModeOn ? (
          <>
            <FormButtons
              submitHandler={handleSubmit((formData) =>
                changeProfileDataHandler(formData)
              )}
            >
              Akceptuj zmiany
            </FormButtons>

            <Button
              buttonType={BUTTON_TYPE_CLASSES.formButton}
              onClick={() => {
                resetChangesHandler();
                refresh("mojeKonto");
              }}
            >
              Cofnij zmiany
            </Button>
          </>
        ) : (
          <Button
            buttonType={BUTTON_TYPE_CLASSES.formButton}
            onClick={() => {
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
