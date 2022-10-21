import { FC } from "react";

import { TextLink } from "../../../../global.styles";
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
        <TextLink>Historia zamówień</TextLink>
        <TextLink>Ustawienia Konta</TextLink>
      </MojeKontoLinks>
    </MojeKontoContainer>
  );
};
