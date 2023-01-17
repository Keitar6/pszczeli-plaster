import styled from "styled-components";
import { StandardFlexContainer } from "../../global.styles";
import { Form } from "../../globalStyles/form/form.globalStyles";

export const ProfileDetailsContainer = styled(StandardFlexContainer)`
  flex-direction: column;
  justify-content: start;
  padding-top: 2rem;
  gap: 2rem;
  // max-width: 15rem;
  flex: 1 1 100%;
`;
export const ProfileDetailsForm = styled(Form)`
  max-width: 30rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.75));
`;
