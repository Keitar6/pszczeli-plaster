import Login from "../../components/login/login.route";
import { useAppSelector } from "../../hooks/hooks";
import { selectCurrentUser } from "../../store/userReducer/user.selector";

import { LoginPageContainer } from "./myAccountPage.styles";

const MyAccountPage = () => {
  const currentUser = useAppSelector(selectCurrentUser);
  return (
    <>
      {currentUser === null ? (
        <LoginPageContainer>
          <Login />
        </LoginPageContainer>
      ) : null}
    </>
  );
};

export default MyAccountPage;
