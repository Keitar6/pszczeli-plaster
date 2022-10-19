import { FC } from "react";

import { TextLink } from "../../../../global.styles";
import {
  PlatnosciIDostawaContainer,
  PlatnosciIDostawaLinks,
  PlatnosciIDostawaTitle
} from "./footerPayDeliver.styles";

export const PayDeliver: FC = () => {
  return (
    <PlatnosciIDostawaContainer>
      <PlatnosciIDostawaTitle>Płatności i dostawa</PlatnosciIDostawaTitle>
      <PlatnosciIDostawaLinks>
        <TextLink>Czas realizacji zamówień</TextLink>
        <TextLink>Faktury i paragony</TextLink>
        <TextLink>Opcje dostawy</TextLink>
      </PlatnosciIDostawaLinks>
    </PlatnosciIDostawaContainer>
  );
};
