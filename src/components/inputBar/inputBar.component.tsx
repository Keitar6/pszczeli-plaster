import { Icon } from "@iconify/react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { setInputSorting } from "store/userReducer/user.actions";
import { IsInputNull } from "types/checkTypes/navInput.typeGuards";
import { useAppDispatch } from "hooks/hooks";
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
    navigate(`/${whereTo}`);
  };

  const onInputChangeHandler = () => {
    const input = document.getElementById("inputBar");
    if (IsInputNull(input)) {
      dispatch(setInputSorting(input.value));
    }
  };

  return (
    <InputBarContainer>
      <Inputcontainer>
        <InputIcon>
          <Icon icon={naviIcons.search} color="#023047" width="24" />
        </InputIcon>
        <Input
          onChange={onInputChangeHandler}
          id="inputBar"
          placeholder="Czego szukasz?"
        />
      </Inputcontainer>
      <Button
        onClick={onSearchHandler}
        buttonType={BUTTON_TYPE_CLASSES.InputBar}
      >
        Szukaj
      </Button>
    </InputBarContainer>
  );
};
