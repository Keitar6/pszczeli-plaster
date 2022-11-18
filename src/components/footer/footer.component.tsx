import { FC } from "react";
import { FooterContainer, FootersContent } from "./footer.styles";

import { Info } from "./footers components/footerInfo/footerInfo.component";
import { MyAccount } from "./footers components/footerMyAccount/footerMyAccount.component";
import { AboutUs } from "./footers components/footerAboutUs/footerAboutUs.component";
import { PayDeliver } from "./footers components/footerPayDeliver/footerPayDeliver.component";
import { selectCurrentUser } from "../../store/userReducer/user.selector";
import { useAppSelector } from "../../hooks/hooks";

export const Footer: FC = () => {
  const currentUser = useAppSelector(selectCurrentUser);

  return (
    <FooterContainer>
      <FootersContent>
        <PayDeliver />
        <Info />
        <AboutUs />

        {currentUser ? <MyAccount /> : null}
      </FootersContent>
    </FooterContainer>
  );
};
