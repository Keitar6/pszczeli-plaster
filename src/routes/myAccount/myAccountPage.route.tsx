import { useEffect, useState } from "react";
import Login from "../../components/login/login.route";
import { ProfileDetails } from "../../components/profileDetails/profileDetails.component";
import Spinner from "../../components/spinner/spinner.component";
import { useAppSelector } from "../../hooks/hooks";
import {
  selectCurrentUser,
  selectIsLoadingUser
} from "../../store/userReducer/user.selector";

import { LoginPageContainer } from "./myAccountPage.styles";

const MyAccountPage = () => {
  const currentUser = useAppSelector(selectCurrentUser);
  const isLoading = useAppSelector(selectIsLoadingUser);

  const [waiting, setWaiting] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setWaiting(false);
    }, 1500);
  }, []);

  return (
    <>
      {waiting ? (
        <Spinner />
      ) : currentUser === null ? (
        <LoginPageContainer>
          <Login />
        </LoginPageContainer>
      ) : (
        <ProfileDetails
          name={currentUser.displayName ? currentUser.displayName : ""}
        />
      )}
    </>
  );
};

export default MyAccountPage;
