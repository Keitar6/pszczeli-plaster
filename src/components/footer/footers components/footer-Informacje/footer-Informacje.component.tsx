import { FC } from "react";

import { TextLink } from "../../../../global.styles";
import {
  InformacjeContainer,
  InformacjeLinks,
  InformacjeTitle
} from "./footer-Informacje.styles";

export const Informacje: FC = () => {
  return (
    <InformacjeContainer>
      <InformacjeTitle>Informacje</InformacjeTitle>
      <InformacjeLinks>
        <TextLink>Warunki reklamacji</TextLink>
        <TextLink>Zwroty towaru</TextLink>
        <TextLink>Regulamin</TextLink>
        <TextLink>Polityka cookies</TextLink>
      </InformacjeLinks>
    </InformacjeContainer>
  );
};
