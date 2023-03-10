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
import { getUsersDataAsync } from "../../store/userReducer/user.thunk";
import { type ProfileDetailsType } from "../../store/userReducer/user.types";
import { formDataInputMap } from "../../utils/checkoutForm/checkoutForm.utils";
import { updateProfileInformationInDoc } from "../../utils/firebase/functions/dbManipulationFunctions.FBFunctions";
import { MyAccountVariants } from "../../utils/framer-motion/variants.utils";
import {
  profileDetailsCreator,
  profileDetailsWithNoEmailAndPassword
} from "../../utils/reusableFunctions/profileDetailsCreator.Functions";
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
    console.log("SIABADYSZ");
    const formDataWithNoEmailAndPassword = profileDetailsWithNoEmailAndPassword(
      formData as ProfileDetailsType
    );

    updateProfileInformationInDoc(
      currentUser as User,
      formDataWithNoEmailAndPassword,
      usersProfileDBData
    ).then(() => dispatch(getUsersDataAsync(currentUser)));

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
    <ProfileDetailsContainer
      variants={MyAccountVariants}
      initial="enter"
      animate="visible"
      exit="exit"
    >
      <Title>Szczeg????y konta {name}</Title>

      <ProfileDetailsForm>
        <FormTextInputs>
          {Object.keys(formDataInputMap).map((input) => {
            const {
              minLength = 2,
              pattern,
              text,
              ...restArgs
            } = formDataInputMap[input];

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
