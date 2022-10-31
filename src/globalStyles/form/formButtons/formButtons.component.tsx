import { BaseSyntheticEvent, FC, PropsWithChildren } from "react";
import Button, {
  BUTTON_TYPE_CLASSES
} from "../../../components/button/button.component";
import { FormButtonsContainer } from "./formButtons.styles";
type FormButtonsProps = {
  submitHandler: (
    e?: BaseSyntheticEvent<object, unknown, unknown> | undefined
  ) => Promise<void>;
  buttonTypeProp?: BUTTON_TYPE_CLASSES;
};

export const FormButtons: FC<PropsWithChildren<FormButtonsProps>> = ({
  children,
  submitHandler,
  buttonTypeProp
}) => {
  const BTNType = !buttonTypeProp ? BUTTON_TYPE_CLASSES.formButton : buttonTypeProp;

  return (  
    <FormButtonsContainer>
      <Button
        data-testid="submit"
        id="submitFormButton"
        type="submit"
        buttonType={BTNType}
        onClick={(e) => {
          e.preventDefault();
          submitHandler();
        }}
      >
        {children}
      </Button>
    </FormButtonsContainer>
  );
};
