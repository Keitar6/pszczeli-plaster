import { FC } from "react";

import { TextLink } from "../../../../global.styles";
import {
  InformacjeContainer,
  InformacjeLinks,
  InformacjeTitle
} from "./footerInfo.styles";

export const Info: FC = () => {
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
