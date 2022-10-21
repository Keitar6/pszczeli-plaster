import { FC } from "react";
import { FooterContainer, FootersContent } from "./footer.styles";

import { Info } from "./footers components/footerInfo/footerInfo.component";
import { MyAccount } from "./footers components/footerMyAccount/footerMyAccount.component";
import { AboutUs } from "./footers components/footerAboutUs/footerAboutUs.component";
import { PayDeliver } from "./footers components/footerPayDeliver/footerPayDeliver.component";

export const Footer: FC = () => {
  return (
    <FooterContainer>
      <FootersContent>
        <PayDeliver />
        <Info />
        <AboutUs />
        <MyAccount />
      </FootersContent>
    </FooterContainer>
  );
};
