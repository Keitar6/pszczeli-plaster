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

import { motion } from "framer-motion";
import { MyAccountVariants } from "../../utils/framer-motion/variants.utils";

const MyAccountPage = () => {
  const currentUser = useAppSelector(selectCurrentUser);
  const isLoading = useAppSelector(selectIsLoadingUser);

  const [waiting, setWaiting] = useState<boolean>(true);

  useEffect(() => {
    !isLoading &&
      setTimeout(() => {
        setWaiting(false);
      }, 1000);
  }, [isLoading]);

  return (
    <>
      {waiting ? (
        <Spinner />
      ) : currentUser === null ? (
        <motion.div
          variants={MyAccountVariants}
          initial="enter"
          animate="visible"
          exit="exit"
        >
          <LoginPageContainer>
            <Login />
          </LoginPageContainer>
        </motion.div>
      ) : (
        <ProfileDetails
          name={currentUser.displayName ? currentUser.displayName : ""}
        />
      )}
    </>
  );
};

export default MyAccountPage;
