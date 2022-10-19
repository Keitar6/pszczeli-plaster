import Button, {
  BUTTON_TYPE_CLASSES
} from "../../../components/button/button.component";
import { BaseSyntheticEvent, FC } from "react";
import { FormButtonsContainer } from "./formButtons.styles";
type FormButtonsProps = {
  submitHandler: (
    e?: BaseSyntheticEvent<object, unknown, unknown> | undefined
  ) => Promise<void>;
};

export const FormButtons: FC<FormButtonsProps> = ({ submitHandler }) => {
  return (
    <FormButtonsContainer>
      <Button
        id="submitFormButton"
        type="submit"
        buttonType={BUTTON_TYPE_CLASSES.formButton}
        onClick={(e) => {
          e.preventDefault();
          submitHandler();
        }}
      >
        Zamawiam
      </Button>
    </FormButtonsContainer>
  );
};
