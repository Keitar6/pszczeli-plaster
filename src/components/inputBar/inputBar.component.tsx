import { Icon } from "@iconify/react";
import { FC } from "react";
import { naviIcons } from "../../routes/navigation/navigation.styles";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  InputBarContainer,
  Input,
  InputIcon,
  Inputcontainer
} from "./InputBar.styles";

export const InputBar: FC = () => {

  const onSearchHandler = () => {

    console.log("asd");

  };

  return (
    <InputBarContainer>
      <Inputcontainer>
        <InputIcon>
          <Icon icon={naviIcons.search} color="#023047" width="24" />
        </InputIcon>
        <Input placeholder="Czego szukasz?" />
      </Inputcontainer>
      <Button
        onClick={onSearchHandler}
        buttonType={BUTTON_TYPE_CLASSES.InputBar}
      >
        Search
      </Button>
    </InputBarContainer>
  );
};
