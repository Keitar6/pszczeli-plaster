import { Icon } from "@iconify/react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { setInputSorting } from "store/userReducer/user.actions";
import { IsInputNull } from "types/checkTypes/navInput.typeGuards";
import { useAppDispatch } from "types/hooks/hooks";
import { naviIcons } from "../../routes/navigation/navigation.styles";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  InputBarContainer,
  Input,
  InputIcon,
  Inputcontainer
} from "./InputBar.styles";

type InputBarProps = {
  whereTo: string;
};

export const InputBar: FC<InputBarProps> = ({ whereTo }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSearchHandler = () => {
    const input = document.getElementById("inputBar");

    if (IsInputNull(input)) {
      dispatch(setInputSorting(input.value));
      navigate(`/${whereTo}`);
    }
  };

  return (
    <InputBarContainer>
      <Inputcontainer>
        <InputIcon>
          <Icon icon={naviIcons.search} color="#023047" width="24" />
        </InputIcon>
        <Input id="inputBar" placeholder="Czego szukasz?" />
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
