import {
  ProfileDetails,
  UserInfoFromDB
} from "../../store/userReducer/user.types";

export const profileDetailsCreator = (
  userInfoFromDB: UserInfoFromDB
): ProfileDetails => {
  const { name, lastName, email, deliveryData } = userInfoFromDB;
  const { city, homeAdress, street, zip, terms } = deliveryData;
  
  return { name, lastName, email, city, homeAdress, street, zip, terms };
};
