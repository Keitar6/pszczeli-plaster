import {
  ProfileDetailsType,
  UserInfoFromDB
} from "../../store/userReducer/user.types";

export const profileDetailsCreator = (
  userInfoFromDB: UserInfoFromDB
): ProfileDetailsType => {
  const { displayName, name, lastName, email, deliveryData } = userInfoFromDB;
  const { city, homeAdress, street, zip, terms } = deliveryData;

  return {
    displayName,
    name,
    lastName,
    email,
    city,
    homeAdress,
    street,
    zip,
    terms
  };
};
export const profileDetailsWithNoEmailAndPassword = (
  formInfo: ProfileDetailsType
): ProfileDetailsType => {
  const {
    name,
    lastName,
    displayName = name + " " + lastName,
    email,
    city,
    homeAdress,
    street,
    zip,
    terms = false
  } = formInfo;

  return {
    displayName,
    name,
    lastName,
    email,
    city,
    homeAdress,
    street,
    zip,
    terms
  };
};

export const reverseProfileDetailsCreator = (
  updatedProfile: ProfileDetailsType,
  initProfile: UserInfoFromDB
): UserInfoFromDB => {
  const {
    displayName,
    name,
    lastName,
    email,
    city,
    homeAdress,
    street,
    zip,
    terms
  } = updatedProfile;
  const dispName = displayName ? displayName : "---";
  const updatedDeliveryData = {
    ...initProfile.deliveryData,
    city,
    homeAdress,
    street,
    zip
  };
  const afterUpdateProfile = {
    displayName: dispName,
    email,
    lastName,
    name,
    deliveryData: updatedDeliveryData
  };

  return afterUpdateProfile;
};
