import { FC } from "react";

import { TextLink } from "../../../../global.styles";
import {
  MojeKontoContainer,
  MojeKontoLinks,
  MojeKontoTitle
} from "./footer-Moje_Konto.styles";


export const MojeKonto: FC = () => {
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
