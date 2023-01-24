import { type User } from "firebase/auth";
import { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Title } from "../../global.styles";
import { FormTextInputs } from "../../globalStyles/form/form.globalStyles";
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
import {
  ProfileDetailsContainer,
  ProfileDetailsForm
} from "./profileDetails.styles";

export const ProfileDetails = ({ name }: { name: string }) => {
  const isEditingModeOn = useAppSelector(selectIsProfileEditingModeOn);
  const usersProfileDBData = useAppSelector(selectCurrentUserFormData);
  const userFormData = profileDetailsCreator(usersProfileDBData);
  const currentUser = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const changeProfileDataHandler = (formData: FieldValues) => {
    const formDataWithNoEmailAndPassword = profileDetailsWithNoEmailAndPassword(
      formData as ProfileDetailsType
    );

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

  useEffect(() => {
    reset(userFormData);
  }, [userFormData.email]);

  return (
    <ProfileDetailsContainer>
      <Title>Szczegóły konta {name}</Title>

      <ProfileDetailsForm>
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
      </ProfileDetailsForm>
    </ProfileDetailsContainer>
  );
};
