import { FC } from "react";

import { BareLink, TextLink } from "../../../../global.styles";
import {
  MojeKontoContainer,
  MojeKontoLinks,
  MojeKontoTitle
} from "./footerMyAccount.styles";

export const MyAccount: FC = () => {

  return (
    <MojeKontoContainer>
      <MojeKontoTitle>Moje Konto</MojeKontoTitle>
      <MojeKontoLinks>
        <TextLink>
          <BareLink to="/historiaZamowien">Historia zamówień</BareLink>{" "}
        </TextLink>
        <TextLink>
          <BareLink to="/mojeKonto">Moje Konto</BareLink>
        </TextLink>
      </MojeKontoLinks>
    </MojeKontoContainer>
  );
};
