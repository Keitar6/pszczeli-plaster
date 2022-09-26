import { Icon } from "@iconify/react";
import { FC } from "react";

import { TextLink } from "../../../../global.styles";
import {
  ONasContainer,
  ONasLinks,
  ONasMediaIcons,
  ONasTitle,
  SocialIcon
} from "./footer-O_Nas.styles";

export const ONas: FC = () => {
  return (
    <ONasContainer>
      <ONasTitle>O Nas</ONasTitle>
      <ONasLinks>
        <TextLink>O nas</TextLink>
        <TextLink>Sklepy stacjonarne</TextLink>
        <TextLink>Współpraca</TextLink>
        <TextLink>Media społecznościowe</TextLink>
        <ONasMediaIcons>
          <SocialIcon>
            <Icon
              icon="brandico:facebook-rect"
              color="#3b5998"
              width="32"
              height="32"
            />
          </SocialIcon>
          <SocialIcon>
            <Icon icon="logos:linkedin-icon" width="32" height="32" />
          </SocialIcon>
          <SocialIcon>
            <Icon
              icon="icon-park:instagram"
              color="#3b5998"
              width="32"
              height="32"
            />
          </SocialIcon>
          <SocialIcon>
            <Icon icon="logos:twitter" color="#3b5998" width="32" height="32" />
          </SocialIcon>
        </ONasMediaIcons>
      </ONasLinks>
    </ONasContainer>
  );
};
